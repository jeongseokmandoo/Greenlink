from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
# from django.db import models
from .models import Notification

@receiver(post_save, sender=get_user_model())
def create_welcome_notification(sender, instance, created, **kwargs):
    # 객체가 생성되었거나 저장되었을 때 실행
    flower_pot = instance.flower_pot
    if flower_pot and created:
        message = f"{instance.korean_name}님을 환영합니다."
        Notification.objects.create(flower_pot=flower_pot, message=message)
