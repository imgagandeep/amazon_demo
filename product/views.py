from django.shortcuts import render

# Create your views here.

# Amazon Product
def amazon_product(request):
    return render(request, 'az_product.html')