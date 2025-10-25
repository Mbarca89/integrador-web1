function submitForm(event) {
            event.preventDefault();

            const formErrors = document.getElementById('formErrors');
            formErrors.innerHTML = '';

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            let isValid = true;

            if (name === '') {
                displayError('Por favor, ingresa tu nombre y apellido.');
                isValid = false;
            }

            if (email === '') {
                displayError('Por favor, ingresa tu correo electrónico.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                displayError('Por favor, ingresa un correo electrónico válido.');
                isValid = false;
            }

            if (message === '') {
                displayError('Por favor, ingresa un mensaje.');
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
                messageInput.value = '';
            }
        }

        function displayError(message) {
            const formErrors = document.getElementById('formErrors');
            const errorParagraph = document.createElement('p');
            errorParagraph.textContent = message;
            formErrors.appendChild(errorParagraph);
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }