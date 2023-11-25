from rest_framework import serializers
from django.contrib.auth.models import User
from .models import FlowerPot, UserProfile

class FlowerPotSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlowerPot
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['korean_name', 'phone_number', 'password', 'profile_picture', 'flower_pot_number']
