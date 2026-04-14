from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

class SignUpForm(UserCreationForm):

    class Meta:
        model = get_user_model() # get_user_model() 함수를 사용해 User 모델을 불러옴
        fields = ['username', 'email', 'nickname']# User 모델의 필드 중 username, email, nickname을 사용자가 입력할 수 있도록 함 (password1, password2는 자동 생성됨)