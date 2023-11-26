from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import SignUpSerializer

class SignUpView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save() # 자동으로 serializers.py에서 create 실행
            response_data = {
                'message': 'User created successfully', # message 가 있으면 서버와의 소통 용이 
                'user_id': user.id,    # phone number
                'username': user.username,
                'korean_name': user.korean_name,
                # Include other fields as needed
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
