function submitForm(event) {
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (name === '') {
        displayError('Por favor, ingresa tu nombre y apellido.', 'nameInput');
        isValid = false;
    } else if (name.length > 50) {
        displayError('El nombre y apellido no pueden superar los 50 caracteres.', 'nameInput');
        isValid = false;
    }

    if (email === '') {
        displayError('Por favor, ingresa tu correo electrónico.', 'emailInput');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('Por favor, ingresa un correo electrónico válido.', 'emailInput');
        isValid = false;
    } else if (email.length > 100) {
        displayError('El correo electrónico no puede superar los 100 caracteres.', 'emailInput');
        isValid = false;
    }

    if (phone === '') {
        displayError('Por favor, ingresá tu teléfono.', 'phoneInput');
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        displayError('Ingresá un teléfono válido sin 0 y sin 15 (solo 10 dígitos).', 'phoneInput');
        isValid = false;
    }

    if (message === '') {
        displayError('Por favor, ingresa un mensaje.', 'messageInput');
        isValid = false;
    } else if (message.length > 500) {
        displayError('El mensaje no puede superar los 500 caracteres.', 'messageInput');
        isValid = false;
    }

    if (isValid) {
        const formData = document.getElementById('formData');
        formData.style.display = 'block';

        document.getElementById('submittedName').textContent = 'Nombre y Apellido: ' + name;
        document.getElementById('submittedEmail').textContent = 'Correo electrónico: ' + email;
        document.getElementById('submittedMessage').textContent = 'Mensaje: ' + message;

        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        messageInput.value = '';
    }
}

function displayError(message, element) {
    const errorElement = document.getElementById(element);
    const errorParagraph = document.createElement('span');
    errorParagraph.textContent = message;
    errorParagraph.classList.add('error-message');
    errorElement.appendChild(errorParagraph);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('phone').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
