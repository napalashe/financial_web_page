from django.shortcuts import render, redirect
from userauths.forms import UserRegisterForm
from django.contrib.auth import login, authenticate
from django.contrib import messages


def register_view(request):
    if request.method == 'POST':
       form = UserRegisterForm(request.POST or None)
       if form.is_valid():
           new_user = form.save()
           username = form.cleaned_data.get('username')
           messages.success(request, f'Congrats on joining, {username}! Account was succesfully created!' )
           new_user = authenticate(username = form.cleaned_data['email'], passwird = form.cleaned_data['password1'])
           login(request, new_user)
           return redirect('core:index')
    else:
        form = UserRegisterForm()
    
    context = {
        'form': form,
    }


    return render(request, 'userauths/sign-up.html', context)
