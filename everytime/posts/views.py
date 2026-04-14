from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseForbidden
from .models import *

def main(request):
    categories = Category.objects.all()
    
    # 카테고리별 최신 글 4개 저장 (리스트 형태)
    category_posts = [
        {"category": category, "posts": Post.objects.filter(category=category).order_by('-created_at')[:4]}
        for category in categories
    ]

    return render(request, 'posts/main.html', {'categories': categories, 'category_posts': category_posts})

def category(request, slug):
    category = get_object_or_404(Category, slug=slug)
    posts = Post.objects.filter(category=category).order_by('-id')

    return render(request, 'posts/category.html', {'posts': posts, 'category': category})

@login_required
def create_post(request, slug):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        category = Category.objects.get(slug=slug)
        is_anonymous = 'is_anonymous' in request.POST
        image = request.FILES.get('image')
        video = request.FILES.get('video')

        post = Post.objects.create(
            title = title,
            content = content,
            is_anonymous = is_anonymous,
            author = request.user,
            image = image,
            video = video
        )

        post.category.add(category)

        return redirect('posts:category', slug)
    return render(request, 'posts/main.html', {'category': category})
 
@login_required
def update_post(request, id):
    post = get_object_or_404(Post, id=id)
    
    if request.method == 'POST':
        post.title = request.POST.get('title')
        post.content = request.POST.get('content')
        post.is_anonymous = 'is_anonymous' in request.POST
        image = request.FILES.get('image')
        video = request.FILES.get('video')

        if image:
            post.image.delete()
            post.image = image
        if video:
            post.video.delete()
            post.video = video
            
        post.save()

        return redirect('posts:detail', id=post.id)
    return render(request, 'posts/update.html', {'post': post})

@login_required
def delete_post(request, id):
    post = get_object_or_404(Post, id=id)
    category = post.category.first()
    slug = category.slug
    post.delete()

    return redirect('posts:category', slug)

@login_required
def detail_post(request, id):
    post = get_object_or_404(Post, id=id)

    return render(request, 'posts/detail.html', {'post': post})

@login_required
def create_comment(request, post_id):
    post = get_object_or_404(Post, id = post_id)
    anonymity = 'anonymity' in request.POST
    
    if request.method == "POST":
        Comment.objects.create(
            content = request.POST.get('content'),
            anonymity = anonymity,
            author = request.user,
            post = post
        )
        return redirect('posts:detail', post_id)
    
@login_required
def delete_comment(request, post_id, comment_id):
    post = get_object_or_404(Post, id = post_id)
    comment = get_object_or_404(Comment, id = comment_id)

    if comment.author != request.user:
        return HttpResponseForbidden("댓글 작성자만 삭제 가능합니다.")
    
    comment.delete()
    return redirect('posts:detail', post_id)

def add_like(request, post_id):
    post = get_object_or_404(Post, id = post_id)
    post.like.add(request.user)
    return redirect('posts:detail', post_id)

def remove_like(request, post_id):
    post = get_object_or_404(Post, id = post_id)
    post.like.remove(request.user)
    return redirect('posts:detail', post_id)

def add_scrap(request, post_id):
    post = get_object_or_404(Post, id = post_id)
    post.scrap.add(request.user)
    return redirect('posts:detail', post_id)

def remove_scrap(request, post_id):
    post = get_object_or_404(Post, id = post_id)
    post.scrap.remove(request.user)
    return redirect('posts:detail', post_id)