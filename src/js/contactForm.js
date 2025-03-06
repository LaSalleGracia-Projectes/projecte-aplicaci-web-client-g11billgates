export function initContactForm() {
    const form = document.querySelector('.contact-form form')
    if(!form) return; 

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        const privacy = form.querySelector('#privacy').checked;

        if (!validateForm(name, email, message, privacy)) {
            return;
        }
    });  
}

function validateForm(name, email, message, privacy) {
    if (!name || !email || !message) {
        showMessage('Por favor, completa todos los campos.', 'error');
        return false;
    }

    if (!validateEmail(email)) {
        showMessage('Por favor, introduce un email válido.', 'error');
        return false;
    }

    if (!privacy) {
        showMessage('Debes aceptar la política de privacidad.', 'error');
        return false;
    }

    return true;
}


