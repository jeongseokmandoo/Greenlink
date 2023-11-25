from django.urls import path
from .views import FlowerPotListCreateView, UserProfileListCreateView, SignupView

urlpatterns = [
    path('flowerpots/', FlowerPotListCreateView.as_view(), name='flowerpot-list-create'),
    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('signup/', SignupView.as_view(), name='signup'),
]
