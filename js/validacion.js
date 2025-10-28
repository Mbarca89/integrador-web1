function submitForm(event) {
    event.preventDefault();

    const formErrors = document.getElementById('formErrors');
    formErrors.innerHTML = '';

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
        displayError('Por favor, ingresa tu nombre y apellido.');
        isValid = false;
    } else if (name.length > 50) {
        displayError('El nombre y apellido no pueden superar los 50 caracteres.');
        isValid = false;
    }

    if (email === '') {
        displayError('Por favor, ingresa tu correo electrónico.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('Por favor, ingresa un correo electrónico válido.');
        isValid = false;
    } else if (email.length > 100) {
        displayError('El correo electrónico no puede superar los 100 caracteres.');
        isValid = false;
    }

    if (phone === '') {
        displayError('Por favor, ingresá tu teléfono.');
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        displayError('Ingresá un teléfono válido sin 0 y sin 15 (solo 10 dígitos).');
        isValid = false;
    }

    if (message === '') {
        displayError('Por favor, ingresa un mensaje.');
        isValid = false;
    } else if (message.length > 500) {
        displayError('El mensaje no puede superar los 500 caracteres.');
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

function displayError(message) {
    const formErrors = document.getElementById('formErrors');
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = message;
    errorParagraph.classList.add('error-message');
    formErrors.appendChild(errorParagraph);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('phone').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
