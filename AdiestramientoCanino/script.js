document.getElementById('formTestimonio').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento de testimonio
    const nuevoTestimonio = document.createElement('div');
    nuevoTestimonio.classList.add('testimonio');
    
    // Agregar el nombre y comentario al nuevo testimonio
    nuevoTestimonio.innerHTML = `
        <p><strong>${nombre}</strong> dijo:</p>
        <p>"${comentario}"</p>
    `;

    // Insertar el nuevo testimonio en la sección de testimonios
    document.getElementById('testimonios').appendChild(nuevoTestimonio);

    // Limpiar el formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
});