document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeTextarea = document.getElementById('mensaje');
    const mensajeExitoDiv = document.getElementById('mensaje-exito');

    // Función para mostrar mensajes de error
    function mostrarError(inputElement, mensaje) {
        const contenedorCampo = inputElement.parentElement;
        const spanError = contenedorCampo.querySelector('.mensaje-error');
        spanError.textContent = mensaje;
        inputElement.classList.add('error-input'); // Opcional: añadir clase para estilizar el input con error
    }

    // Función para limpiar mensajes de error
    function limpiarError(inputElement) {
        const contenedorCampo = inputElement.parentElement;
        const spanError = contenedorCampo.querySelector('.mensaje-error');
        spanError.textContent = '';
        inputElement.classList.remove('error-input'); // Opcional: remover clase de error
    }

    // Función para validar el formato de email
    function validarEmail(email) {
        // Expresión regular simple para validación de email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evitar el envío real del formulario

        let esValido = true;

        // Limpiar errores previos
        limpiarError(nombreInput);
        limpiarError(emailInput);
        limpiarError(mensajeTextarea);

        // Validar campo Nombre
        if (nombreInput.value.trim() === '') {
            mostrarError(nombreInput, 'El nombre es obligatorio.');
            esValido = false;
        }

        // Validar campo Email
        if (emailInput.value.trim() === '') {
            mostrarError(emailInput, 'El correo electrónico es obligatorio.');
            esValido = false;
        } else if (!validarEmail(emailInput.value.trim())) {
            mostrarError(emailInput, 'El formato del correo electrónico no es válido.');
            esValido = false;
        }

        // Validar campo Mensaje
        if (mensajeTextarea.value.trim() === '') {
            mostrarError(mensajeTextarea, 'El mensaje es obligatorio.');
            esValido = false;
        }
        // Opcional: Validar longitud máxima (aunque ya está en HTML con maxlength)


        // Si todo es válido
        if (esValido) {
            console.log('Formulario válido. Enviando datos (simulado)...');
            console.log('Nombre:', nombreInput.value);
            console.log('Email:', emailInput.value);
            console.log('Asunto:', document.getElementById('asunto').value);
            console.log('Mensaje:', mensajeTextarea.value);

            // Ocultar formulario y mostrar mensaje de éxito
            formulario.style.display = 'none';
            mensajeExitoDiv.style.display = 'block';

        } else {
            console.log('Formulario inválido. Por favor, corrige los errores.');
        }
    });

    // Opcional: Limpiar errores mientras el usuario escribe
    nombreInput.addEventListener('input', () => limpiarError(nombreInput));
    emailInput.addEventListener('input', () => limpiarError(emailInput));
    mensajeTextarea.addEventListener('input', () => limpiarError(mensajeTextarea));
});