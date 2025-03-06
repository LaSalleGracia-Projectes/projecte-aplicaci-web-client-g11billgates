export function initContactForm() {
    const form = document.querySelector('.contact-form form')
    if(!form) return; 
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    const privacy = form.querySelector('#privacy').checked;
})