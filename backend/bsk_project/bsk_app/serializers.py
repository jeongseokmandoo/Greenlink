from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import FlowerPot, Notification, UserProfile
from rest_framework.authtoken.models import Token


UserProfile = get_user_model()


class FlowerPotSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlowerPot
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    flower_pot = FlowerPotSerializer(required=False)

    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'korean_name', 'profile_picture',
                  'flower_pot', 'nickname')
        # 보안 상의 이유로 password 제외 - signup 혹은 endpoint(비번 변경) 등의 상황에서만 예외적으로


class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    profile_picture = serializers.URLField(write_only=True, required=False)

    class Meta:
        model = UserProfile
        fields = ('username', 'password', 'korean_name',
                  'profile_picture', 'flower_pot', 'nickname')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance


class FamilyMemberSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['nickname', 'profile_picture',
                  'korean_name', 'is_current_user']

    def get_is_current_user(self, obj):
        # 현재 로그인한 사용자와 현재 사용자 정보가 같은지 확인
        current_user = self.context.get('current_user')
        return obj == current_user


