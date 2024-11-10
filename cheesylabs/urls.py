from django.urls import path
from django_distill import distill_path
from . import views

def get_index_params():
    return None

urlpatterns = [
    distill_path('', views.landing_page, name='landing_page', distill_func=get_index_params),
    path('api/', views.api_view, name='api_view'),  # Keep your API view if needed
]
