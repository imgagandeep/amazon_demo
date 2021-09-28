from django.urls import path
from product import views

urlpatterns = [
    path('', views.amazon_product, name = 'product'),
    path('old/', views.amazon_product_old, name = 'old_product'),
]

