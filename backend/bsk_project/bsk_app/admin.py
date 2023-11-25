from django.contrib import admin
from .models import UserProfile
from .models import FlowerPot


# @admin.register(UserProfile)
# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ('user', 'profile_picture', 'flower_pot_number', 'notifications_enabled', 'nickname', 'korean_name')

#     def flower_pot_number(self, obj):
#         return obj.flower_pot.pot_number if obj.flower_pot else None

# @admin.register(FlowerPot)
# class FlowerPotAdmin(admin.ModelAdmin):
#     list_display = ('pot_number', 'plant_name', 'start_date', 'plant_type', 'moisture_level')

admin.site.register(UserProfile)
admin.site.register(FlowerPot)

