from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import UserProfile
from .models import FlowerPot


admin.site.register(UserProfile)
admin.site.register(FlowerPot)

