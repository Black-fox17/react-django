from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    x = 20
    return render(request,"index.html",{"new":x})