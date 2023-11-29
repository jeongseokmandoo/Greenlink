from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth import get_user_model




# Create your models here.

class FlowerPot(models.Model):
    pot_number = models.IntegerField(primary_key=True)
    plant_name = models.CharField(max_length=255)
    start_date = models.DateField()
    plant_type = models.CharField(max_length=255, blank=True, null=True)
    moisture_level = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __str__(self):
        return f"{self.plant_name} - Pot Number {self.pot_number}"

class ProfileImage(models.Model):
    image = models.ImageField(upload_to='profile_images/')
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.description

class UserProfile(AbstractUser):
    korean_name = models.CharField(max_length=30, blank=True, null=True)
    profile_picture = models.ForeignKey(ProfileImage, on_delete=models.SET_NULL, null=True, blank=True)
    flower_pot = models.ForeignKey(FlowerPot, on_delete=models.SET_NULL, null=True, blank=True, related_name="users")
    notifications_enabled = models.BooleanField(default=True)
    nickname = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.username
    


# UserProfile = get_user_model() # 직접 class로 부르는 것보다 보안 상 더 좋다! django 에서 권장함

class Notification(models.Model):
    flower_pot = models.ForeignKey(FlowerPot, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # path = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.flower_pot} - {self.message}"



