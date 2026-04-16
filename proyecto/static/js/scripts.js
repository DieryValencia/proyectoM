// JavaScript para dinamismo en la app de café

// Función para agregar clase de animación fade-in a elementos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos con clase product-item
    const productItems = document.querySelectorAll('.product-item');
    // Agregar clase fade-in con retraso para efecto escalonado
    productItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in'); // Agregar animación de entrada
        }, index * 200); // Retraso de 200ms por elemento
    });

    // Agregar evento de clic a productos para mostrar alerta (dinamismo simple)
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('a').textContent.split(' - ')[0]; // Obtener nombre del producto
            alert(`¡Seleccionaste ${productName}! Redirigiendo a detalles...`); // Mostrar alerta antes de redirigir
        });
    });
});

// Función para animar el título principal
function animateTitle() {
    const title = document.querySelector('h1');
    if (title) {
        title.style.transform = 'scale(1.05)'; // Escalar ligeramente
        setTimeout(() => {
            title.style.transform = 'scale(1)'; // Volver al tamaño original
        }, 300); // Duración de la animación
    }
}

// Llamar a animateTitle cada 5 segundos para dinamismo continuo
setInterval(animateTitle, 5000);