from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import SignUpSerializer, UserProfileSerializer, FlowerPotSerializer, NotificationSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from bsk_project.settings import SECRET_KEY
import jwt
from .models import UserProfile
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
# from bsk_app.models import ProfileImage
# from django.http import JsonResponse

# Create instances of PredefinedImage manually
# predefined_images_data = [
#     {'identifier': '1', 'file_path': 'path/to/1.jpg'},
#     {'identifier': '2', 'file_path': 'path/to/2.jpg'},
#     {'identifier': '3', 'file_path': 'path/to/3.jpg'},
#     {'identifier': '4', 'file_path': 'path/to/4.jpg'},
#     {'identifier': '5', 'file_path': 'path/to/5.jpg'},
#     {'identifier': '6', 'file_path': 'path/to/6.jpg'},
#     {'identifier': '7', 'file_path': 'path/to/7.jpg'},
#     {'identifier': '8', 'file_path': 'path/to/8.jpg'},
#     {'identifier': '9', 'file_path': 'path/to/9.jpg'},
#     {'identifier': '10', 'file_path': 'path/to/10.jpg'},
#     {'identifier': '11', 'file_path': 'path/to/11.jpg'},
#     {'identifier': '12', 'file_path': 'path/to/12.jpg'},
#     {'identifier': '13', 'file_path': 'path/to/13.jpg'},
#     {'identifier': '14', 'file_path': 'path/to/14.jpg'},
#     {'identifier': '15', 'file_path': 'path/to/15.jpg'},
# ]
# for data in predefined_images_data:
#     ProfileImage.objects.create(**data)

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

    # get user data by token
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


class FlowerView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):

        user = request.user

        flower_pot = user.flower_pot
        flower_serializer = FlowerPotSerializer(data=flower_pot)
        return Response({'message': "complete", 'flower_serializer': flower_serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request):
        user = request.user

        serializer = FlowerPotSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

        return Response({'message': "complete", 'serializer': serializer.data}, status=status.HTTP_200_OK)


class NotificationView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        flower_pot = user.flower_pot
        notificatiions = user.notifications

        content = dict()

        flower_serializer = FlowerPotSerializer(data=flower_pot)
        notification_serializer = NotificationSerializer(
            data=notificatiions, many=True)

        content['flower_pot'] = flower_serializer.data
        content['notificatiions'] = notification_serializer.data

        return Response({'message': "complete", 'content': content}, status=status.HTTP_200_OK)
