from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import SignUpSerializer, UserProfileSerializer, FlowerPotSerializer, NotificationSerializer, FamilyMemberSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404, render, redirect
from bsk_project.settings import SECRET_KEY
import jwt
from .models import FlowerPot, Notification
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth import get_user_model



# class SignUpView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = SignUpSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save() # 자동으로 serializers.py에서 create 실행
#             response_data = {
#                 'message': 'User created successfully', # message 가 있으면 서버와의 소통 용이 
#                 'user_id': user.id,    # phone number
#                 'username': user.username,
#                 'korean_name': user.korean_name,
#                 # Include other fields as needed
#             }
#             return Response(response_data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
                message = '물 주세요!!'
                Notification.objects.create(flower_pot=flower_pot, message=message, path='/')
            elif new_moisture_level >= 80:
                message = 'NEXT님이 식물에 물을 주었습니다!'
                Notification.objects.create(flower_pot=flower_pot, message=message, path='/')

            messages.success(request, 'Moisture level updated successfully!')
            redirect_url = reverse('update_moisture_level', kwargs={'pot_number': pot_number})
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
            refresh_token = str(token.refresh_token)
            access_token = str(token.access_token)

            response_data = {
                'message': 'User created successfully',
                'user_id': user.id,
                'username': user.username,
                'korean_name': user.korean_name,
                'token': {
                    'access': access_token,
                    'refresh': refresh_token,
                },
            }

            # # 응답에 JWT 토큰을 쿠키에 저장
            # response = Response(response_data, status=status.HTTP_201_CREATED)
            # response.set_cookie("access", access_token, httponly=True)
            # response.set_cookie("refresh", refresh_token, httponly=True)

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
                        "refresh": refresh_token,
                    },
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    #get user data by token
    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def get(self, request):
        user = request.user
    
        # token implemented by headers

        # # access token을 decode 해서 유저 id 추출 => 유저 식별
        # access = request.COOKIES['access']
        # payload = jwt.decode(access, SECRET_KEY, algorithms=['HS256'])
        # pk = payload.get('user_id')
        # user = get_object_or_404(UserProfile, pk=pk)
        serializer = UserProfileSerializer(instance=user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])

    def patch(self, request):
        serializer = UserProfileSerializer(instance=request.user, data=request.data, partial=True) # instance : 업데이트할 모델 인스턴스, data : 전달할 데이터
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

    
    

    @authentication_classes([JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def delete(self, request):
        request.user.delete()
        return Response({'message': "delete complete"},status.HTTP_200_OK)



class HomeView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        # 화분 정보 가져오기
        flower_pot = user.flower_pot
        flower_serializer = FlowerPotSerializer(flower_pot)

        # 알림 가져오기
        notifications = user.notifications
        notification_serializer = NotificationSerializer(notifications, many=True)

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
        flower_serializer = FlowerPotSerializer(data=flower_pot)
        return Response({'message': "complete", 'flower_serializer':flower_serializer.data}, status=status.HTTP_200_OK)
        
    def patch(self, request):
        serializer = FlowerPotSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "complete", 'serializer': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    

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
        serializer = FamilyMemberSerializer(family_members, many=True, context={'current_user': current_user})

        return Response({'family_members': serializer.data}, status=status.HTTP_200_OK)
   


class NotificationView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


    def get(self, request):
        user = request.user

        flower_pot = user.flower_pot
        notificatiions = user.notifications

        content = dict()

        flower_serializer = FlowerPotSerializer(data=flower_pot)
        notification_serializer = NotificationSerializer(data=notificatiions, many=True)

        content['flower_pot'] =flower_serializer.data
        content['notificatiions'] = notification_serializer.data

        return Response({'message': "complete", 'content': content}, status=status.HTTP_200_OK)


