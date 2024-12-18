// Script para interactividad básica de la página

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.hero button');

    // Acción al hacer clic en el botón principal
    button.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('#services').offsetTop,
            behavior: 'smooth'
        });
    });

    // Validación simple del formulario de contacto
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos antes de enviar el formulario.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
        form.reset();
    });

    // Función para validar correos electrónicos
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
