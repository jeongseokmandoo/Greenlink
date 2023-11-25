from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from bsk_app.models import UserProfile




# Create your models here.

class FlowerPot(models.Model):
    pot_number = models.IntegerField(primary_key=True)
    plant_name = models.CharField(max_length=255)
    start_date = models.DateField()
    plant_type = models.CharField(max_length=255, blank=True, null=True)
    moisture_level = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __str__(self):
        return f"{self.plant_name} - Pot Number {self.pot_number}"

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    korean_name = models.CharField(max_length=30, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    flower_pot = models.ForeignKey(FlowerPot, on_delete=models.SET_NULL, null=True, blank=True)
    notifications_enabled = models.BooleanField(default=True)
    nickname = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.user.username
    

class Notification(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    isread = models.BooleanField(default=False)
    path = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.user_profile.user.username} - {self.message}"

    


    

# app_label 추가
# UserProfile._meta.app_label = 'bsk_app' # 여러 앱 있을 때 필요

