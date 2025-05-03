document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        // Validaciones
        const name = formData.get("name").trim();
        const email = formData.get("email").trim();
        const subject = formData.get("subject").trim();
        const message = formData.get("message").trim();
        const privacy = formData.get("privacy");

        if (!name || !email || !message || !subject) {
            showMessage("Por favor, completa todos los campos.", "error");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            showMessage("Por favor, introduce un email válido.", "error");
            return;
        }

        if (!privacy) {
            showMessage("Debes aceptar la política de privacidad.", "error");
            return;
        }

        // Enviar formulario mediante AJAX
        fetch(form.action, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                showMessage(data, "success");
                form.reset();
            })
            .catch((error) => {
                showMessage(
                    "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
                    "error"
                );
            });
    });

    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${type}`;
        messageContainer.style.display = "block";

        // Hacer scroll hasta el mensaje
        messageContainer.scrollIntoView({ behavior: "smooth" });

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 5000);
    }
});
