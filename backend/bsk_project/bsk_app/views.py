from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import SignUpSerializer, UserProfileSerializer, FlowerPotSerializer, NotificationSerializer, FamilyMemberSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404, render, redirect
from .models import FlowerPot, Notification
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib import messages
from django.urls import reverse
from .forms import MoistureLevelForm


@staff_member_required
def update_moisture_level(request, pot_number):
    flower_pot = get_object_or_404(FlowerPot, pot_number=pot_number)

    if request.method == 'POST':
        form = MoistureLevelForm(request.POST)
        if form.is_valid():
            new_moisture_level = form.cleaned_data['moisture_level']

            # 업데이트된 moisture_level 저장
            flower_pot.moisture_level = new_moisture_level
            flower_pot.save()

            # 알림 생성 및 저장
            if new_moisture_level <= 30:
                message = '물 주세요 💦🥵'
                emoticon = '💧'
                Notification.objects.create(
                    flower_pot=flower_pot, message=message, emoticon=emoticon)
            elif new_moisture_level >= 80:
                message = '🐯 NEXT님이 식물에 물을 주었습니다!'
                emoticon = '💧'
                Notification.objects.create(
                    flower_pot=flower_pot, message=message, emoticon=emoticon)

            messages.success(request, 'Moisture level updated successfully!')
            redirect_url = reverse('update_moisture_level', kwargs={
                                   'pot_number': pot_number})
            return redirect(redirect_url)

    form = MoistureLevelForm()
    return render(request, 'update_moisture_level.html', {'form': form, 'flower_pot': flower_pot})


class SignUpView(APIView):

    def post(self, request, *args, **kwargs):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # JWT 토큰 발급
            token = TokenObtainPairSerializer.get_token(user)
            # refresh_token = str(token.refresh_token)
            access_token = str(token.access_token)

            response_data = {
                'message': 'User created successfully',
                'user_id': user.id,
                'username': user.username,
                'korean_name': user.korean_name,
                'profile_picture': user.profile_picture if user.profile_picture else None,
                'token': {
                    'access': access_token,
                    # 'refresh': refresh_token,
                },
            }

            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        # 유저 인증
        user = authenticate(
            username=request.data.get("username"), password=request.data.get("password")
        )
        # 이미 회원가입 된 유저일 때
        if user is not None:
            serializer = UserProfileSerializer(user)
            # jwt 토큰 접근
            token = TokenObtainPairSerializer.get_token(user)
            refresh_token = str(token)
            access_token = str(token.access_token)
            return Response(
                {
                    "user": serializer.data,
                    "message": "login success",
                    "token": {
                        "access": access_token,
                        # "refresh": refresh_token,
                    },
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    # get user data by token
    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def get(self, request):
        user = request.user
        serializer = UserProfileSerializer(instance=user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def patch(self, request):
        # instance : 업데이트할 모델 인스턴스, data : 전달할 데이터
        serializer = UserProfileSerializer(
            instance=request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def delete(self, request):
        request.user.delete()
        return Response({'message': "delete complete"}, status.HTTP_200_OK)


class HomeView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        # 화분 정보 가져오기
        flower_pot = user.flower_pot
        flower_serializer = FlowerPotSerializer(flower_pot)

        # 알림 가져오기
        notifications = flower_pot.notifications
        notification_serializer = NotificationSerializer(
            notifications, many=True)

        return Response(
            {
                'flower_pot': flower_serializer.data,
                'notifications': notification_serializer.data,
                'message': 'complete',
            },
            status=status.HTTP_200_OK)


class FlowerView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        flower_pot = user.flower_pot
        flower_serializer = FlowerPotSerializer(flower_pot)
        return Response({'message': "complete", 'flower_serializer': flower_serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request):
        user = request.user
        flower_pot = user.flower_pot

        serializer = FlowerPotSerializer(
            instance=flower_pot, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

        else:
            return Response({"message": "Invalid credentials", 'serializer': serializer.data}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': "complete", 'serializer': serializer.data}, status=status.HTTP_200_OK)


class FamilyView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # 현재 로그인한 사용자 정보 가져오기
        current_user = request.user
        # 현재 사용자의 flower_pot 가져오기
        flower_pot = current_user.flower_pot
        # 해당 flower_pot을 공유하는 사용자들 가져오기
        family_members = flower_pot.users.all()
        serializer = FamilyMemberSerializer(family_members, many=True, context={
                                            'current_user': current_user})

        return Response({'family_members': serializer.data}, status=status.HTTP_200_OK)


class NotificationView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        flower_pot = user.flower_pot
        notifications = flower_pot.notifications.all()

        content = dict()

        flower_serializer = FlowerPotSerializer(flower_pot)
        notification_serializer = NotificationSerializer(
            notifications, many=True)

        content['flower_pot'] = flower_serializer.data
        content['notifications'] = notification_serializer.data

        return Response({'message': "complete", 'content': content}, status=status.HTTP_200_OK)
