from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import FlowerPot, ProfileImage, Notification
from rest_framework.authtoken.models import Token



UserProfile = get_user_model()

class FlowerPotSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlowerPot
        fields = '__all__'

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'



class UserProfileSerializer(serializers.ModelSerializer):
    profile_picture = ProfileImageSerializer(required=False)
    flower_pot = FlowerPotSerializer(required=False)

    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'korean_name', 'profile_picture', 'flower_pot', 'notifications_enabled', 'nickname')
        # 보안 상의 이유로 password 제외 - signup 혹은 endpoint(비번 변경) 등의 상황에서만 예외적으로

class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = ('username', 'password', 'korean_name', 'profile_picture', 'flower_pot', 'notifications_enabled', 'nickname')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField(write_only=True)

#     def validate(self, data):
#         username = data.get('username')
#         password = data.get('password')

#         if username and password:
#             user = authenticate(username=username, password=password)

#             if user:
#                 data['user'] = user
#             else:
#                 raise serializers.ValidationError('Unable to log in with provided credentials.')
#         else:
#             raise serializers.ValidationError('Must include "username" and "password".')

#         return data