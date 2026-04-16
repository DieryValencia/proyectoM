from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),  # Página principal: lista de productos
    path('producto/<int:product_id>/', views.product_detail, name='product_detail'),  # Detalles del producto
]