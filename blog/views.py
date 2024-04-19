from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from django.http import HttpResponse
from django.utils import timezone
from .forms import PostForm
from django.contrib import messages

def blog_list(request):
        posts = Post.objects.all().order_by('-created_at')
        return render(request, 'blog/blog-home.html',{'posts': posts})



def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            form.save()
            messages.success(request, f'Your post has been submitted!')
            return redirect('blog:blog-home') 
    else:
        form = PostForm()
    return render(request, 'blog/create-blog.html', {'form': form})