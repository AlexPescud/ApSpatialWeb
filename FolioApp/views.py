from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'FolioApp/dashboard.html')
    #return HttpResponse('Home')

def jobs(request):
    return render(request, 'FolioApp/jobs.html')

def about(request):
    return render(request, 'FolioApp/about.html')

def insights(request):  
    return render(request, 'FolioApp/insights.html')
