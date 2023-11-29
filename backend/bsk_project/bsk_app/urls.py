from django.urls import path
from .views import (
    update_moisture_level,
    SignUpView,
    AuthView,
    HomeView,
    FlowerView,
    FamilyView,
    NotificationView,
)

urlpatterns = [
    # 관리자용 수분 업데이트 페이지
    path('update_moisture_level/<int:pot_number>', update_moisture_level, name='update_moisture_level'),

    
    # 회원가입
    path('signup/', SignUpView.as_view(), name='signup'),

    # 로그인
    path('login/', AuthView.as_view(), name='login'),

    # 홈
    path('home/', HomeView.as_view(), name='home'),

    # 식물 정보 수정
    path('flower/update/', FlowerView.as_view(), name='flower_update'),

    # 우리 가족 보기
    path('account/', FamilyView.as_view(), name='account'),

    # 내 정보 수정
    path('account/update/', FamilyView.as_view(), name='account_update'),

    # 알림
    path('notifications/', NotificationView.as_view(), name='notifications'),

    # Add other URLs as needed
]


