document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const privacy = document.querySelector("#privacy").checked;

        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); 
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Por favor, introduce un email válido.");
            event.preventDefault();
            return;
        }

        if (!privacy) {
            alert("Debes aceptar la política de privacidad.");
            event.preventDefault();
        }
    });
});
