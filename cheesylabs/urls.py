from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('api/', views.api_view, name='api_view'),  # Keep your API view if needed
]
