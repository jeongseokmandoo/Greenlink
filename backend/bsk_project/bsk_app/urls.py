from django.urls import path
from .views import SignUpView

urlpatterns = [
    # path('flowerpots/', FlowerPotListCreateView.as_view(), name='flowerpot-list-create'),
    # path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('signup/', SignUpView.as_view(), name='signup'),
]
