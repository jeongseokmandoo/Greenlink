from django.urls import path
from .views import SignUpView, AuthView
urlpatterns = [
    # path('flowerpots/', FlowerPotListCreateView.as_view(), name='flowerpot-list-create'),
    # path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('signup/', SignUpView.as_view(), name='signup'),
    
    path("auth/", AuthView.as_view()),
    # post - 로그인, delete - 로그아웃, get - 유저정보
]
