from django.shortcuts import render, get_object_or_404
from .models import Producto
from django.db.models import Q  # Para consultas complejas

# Vista para listar todos los productos, con búsqueda opcional
def product_list(request):
    query = request.GET.get('q', '')  # Obtener parámetro de búsqueda de la URL
    if query:
        productos = Producto.objects.filter(Q(nombre__icontains=query))  # Filtrar por nombre (insensible a mayúsculas)
    else:
        productos = Producto.objects.all()  # Obtener todos si no hay búsqueda
    return render(request, 'product_list.html', {'productos': productos, 'query': query})  # Pasar query para mostrar en formulario

# Vista para mostrar detalles de un producto específico
def product_detail(request, product_id):
    producto = get_object_or_404(Producto, id=product_id)  # Obtener el producto por ID o 404 si no existe
    return render(request, 'product_detail.html', {'producto': producto})
