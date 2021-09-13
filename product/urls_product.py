from django.urls import path
from product import views

urlpatterns = [
    path('', views.amazon_product, name = 'product'),
]

