from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm
from posts.models import Post
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('accounts:login')
    else:
        form = SignUpForm()
    return render(request, 'accounts/signup.html', {'form': form})

def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            auth_login(request, form.user_cache)
            return redirect('posts:main')
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/login.html', {'form': form})

def logout(request):
    if request.user.is_authenticated:
        auth_logout(request)
    return redirect('posts:main')

def mypost(request):
    posts = request.user.posts.all().order_by('-id')
    return render(request, 'accounts/mypost.html', {'posts' : posts})

def mypage(request):
    return render(request, 'accounts/mypage.html')

def myscrap(request):
    scrap_posts = Post.objects.filter(scrap = request.user).order_by('-id')
    return render(request, 'accounts/myscrap.html', {'posts' : scrap_posts})

def user_info(request):
    return render(request, 'accounts/user-info.html')