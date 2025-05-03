document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();
        const privacy = form.privacy.checked;

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


        const data = {
            name,
            email,
            message: `${subject}\n\n${message}`,
        };

        fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.message) {
                    showMessage(result.message, "success");
                    form.reset();
                } else {
                    showMessage("Mensaje enviado.", "success");
                    form.reset();
                }
            })
            .catch((error) => {
                console.error(error);
                showMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo.", "error");
            });
    });

    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = `message-container ${type}`;
        messageContainer.style.display = "block";
        messageContainer.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 5000);
    }
});
