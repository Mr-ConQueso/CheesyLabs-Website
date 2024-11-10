from django.http import JsonResponse
from django.shortcuts import render

def api_view(request):
    return JsonResponse({"message": "Hello, Web3!"})

def landing_page(request):
    return render(request, 'cheesylabs/index.html')
