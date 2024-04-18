from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from django.http import HttpResponse
from django.utils import timezone
from .forms import PostForm

def blog_list(request):
        posts = Post.objects.all()
        return render(request, 'blog/blog-home.html',{'posts': posts})



def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('posts_list') 
    else:
        form = PostForm()
    return render(request, 'blog-home.html', {'form': form})