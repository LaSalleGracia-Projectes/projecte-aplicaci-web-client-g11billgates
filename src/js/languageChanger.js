const translations = {
    en: {
        // Header
        nav_about: "About Us",
        nav_contact: "Contact",
        nav_download: "Download",

        // Breadcrumb
        home: "Home",
        contact: "Contact",
        about: "About Us",
        download: "Download",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        cookies: "Cookies Policy",
        learn_more: "Learn More",

        // Contact Form
        contact_title: "Contact",
        name_label: "Name",
        email_label: "Email",
        subject_label: "Subject",
        message_label: "Message",
        privacy_checkbox: "I accept the",
        privacy_link: "privacy policy",
        send_button: "SEND",

        // Form Messages
        fill_fields: "Please fill in all fields.",
        valid_email: "Please enter a valid email.",
        accept_privacy: "You must accept the privacy policy.",
        message_sent: "Message sent successfully.",
        message_error: "Error sending message. Please try again.",

        // Footer
        footer_download: "Download",
        footer_legal: "Legal",
        footer_terms: "Terms of Use",
        footer_privacy: "Privacy Policy",
        footer_cookies: "Cookies Policy",
        copyright: "TeamUp ©2025 All rights reserved",

        // Privacy Policy Page
        privacy_title: "Privacy Policy",
        privacy_intro:
            "Welcome to TeamUp. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.",
        privacy_section1_title: "1. Information We Collect",
        privacy_section1_content:
            "We collect information that you provide directly to us, including but not limited to:",
        privacy_section1_list: [
            "Name and contact information",
            "Account credentials",
            "Profile information",
            "Communication preferences",
        ],
        privacy_section2_title: "2. How We Use Your Information",
        privacy_section2_content: "We use the information we collect to:",
        privacy_section2_list: [
            "Provide and maintain our services",
            "Improve user experience",
            "Send important notifications",
            "Respond to your requests",
        ],
        privacy_section3_title: "3. Information Sharing",
        privacy_section3_content:
            "We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:",
        privacy_section3_list: [
            "With your consent",
            "To comply with legal obligations",
            "To protect our rights and safety",
        ],

        // Terms of Use Page
        terms_title: "Terms of Use",
        terms_intro:
            "By accessing and using TeamUp, you agree to be bound by these Terms of Use.",
        terms_section1_title: "1. Account Registration",
        terms_section1_content:
            "When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account.",
        terms_section2_title: "2. User Conduct",
        terms_section2_content: "You agree not to:",
        terms_section2_list: [
            "Violate any applicable laws",
            "Impersonate others",
            "Share harmful content",
            "Attempt to gain unauthorized access",
        ],
        terms_section3_title: "3. Intellectual Property",
        terms_section3_content:
            "All content on TeamUp is protected by intellectual property rights. You may not use, modify, or distribute our content without permission.",
    },
    es: {
        // Header
        nav_about: "Sobre Nosotros",
        nav_contact: "Contacto",
        nav_download: "Descargar",

        // Breadcrumb
        home: "Home",
        contact: "Contacto",
        about: "Sobre Nosotros",
        download: "Descargar",
        privacy: "Políticas de privacidad",
        terms: "Términos de uso",
        cookies: "Políticas de cookies",
        learn_more: "Saber más",

        // Contact Form
        contact_title: "Contacto",
        name_label: "Nombre",
        email_label: "Email",
        subject_label: "Asunto",
        message_label: "Mensaje",
        privacy_checkbox: "Acepto la",
        privacy_link: "política de privacidad",
        send_button: "ENVIAR",

        // Form Messages
        fill_fields: "Por favor, completa todos los campos.",
        valid_email: "Por favor, introduce un email válido.",
        accept_privacy: "Debes aceptar la política de privacidad.",
        message_sent: "Mensaje enviado correctamente.",
        message_error:
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",

        // Footer
        footer_download: "Descargar",
        footer_legal: "Legal",
        footer_terms: "Términos de uso",
        footer_privacy: "Políticas de privacidad",
        footer_cookies: "Políticas de cookies",
        copyright: "TeamUp ©2025 All rights reserved",

        // Privacy Policy Page
        privacy_title: "Política de Privacidad",
        privacy_intro:
            "Bienvenido a TeamUp. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando utiliza nuestra plataforma.",
        privacy_section1_title: "1. Información que Recopilamos",
        privacy_section1_content:
            "Recopilamos la información que nos proporciona directamente, incluyendo pero no limitado a:",
        privacy_section1_list: [
            "Nombre e información de contacto",
            "Credenciales de cuenta",
            "Información de perfil",
            "Preferencias de comunicación",
        ],
        privacy_section2_title: "2. Cómo Utilizamos su Información",
        privacy_section2_content:
            "Utilizamos la información que recopilamos para:",
        privacy_section2_list: [
            "Proporcionar y mantener nuestros servicios",
            "Mejorar la experiencia del usuario",
            "Enviar notificaciones importantes",
            "Responder a sus solicitudes",
        ],
        privacy_section3_title: "3. Compartir Información",
        privacy_section3_content:
            "No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información solo en las siguientes circunstancias:",
        privacy_section3_list: [
            "Con su consentimiento",
            "Para cumplir con obligaciones legales",
            "Para proteger nuestros derechos y seguridad",
        ],

        // Terms of Use Page
        terms_title: "Términos de Uso",
        terms_intro:
            "Al acceder y utilizar TeamUp, aceptas estar sujeto a estos Términos de Uso.",
        terms_section1_title: "1. Registro de Cuenta",
        terms_section1_content:
            "Al crear una cuenta, debes proporcionar información precisa y completa. Eres responsable de mantener la confidencialidad de tu cuenta.",
        terms_section2_title: "2. Conducta del Usuario",
        terms_section2_content: "Te comprometes a no:",
        terms_section2_list: [
            "Violar cualquier ley aplicable",
            "Suplantar a otros",
            "Compartir contenido dañino",
            "Intentar obtener acceso no autorizado",
        ],
        terms_section3_title: "3. Propiedad Intelectual",
        terms_section3_content:
            "Todo el contenido en TeamUp está protegido por derechos de propiedad intelectual. No puedes usar, modificar o distribuir nuestro contenido sin permiso.",
    },
};

let currentLanguage = "es";

function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        updateContent();
        updateLanguageButton(lang);
        localStorage.setItem("preferredLanguage", lang);
    }
}

function updateContent() {
    // Update navigation
    document.querySelectorAll("nav a").forEach((link) => {
        if (link.href.includes("sobre_nosotros.html")) {
            link.textContent = translations[currentLanguage].nav_about;
        } else if (link.href.includes("contacto.html")) {
            link.textContent = translations[currentLanguage].nav_contact;
        } else if (link.href.includes("descargar.html")) {
            link.textContent = translations[currentLanguage].nav_download;
        }
    });

    // Update breadcrumb
    const breadcrumbSpan = document.querySelector(".breadcrumb span");
    if (breadcrumbSpan) {
        const currentPage = window.location.pathname;
        if (currentPage.includes("contacto.html")) {
            breadcrumbSpan.textContent = translations[currentLanguage].contact;
        } else if (currentPage.includes("sobre_nosotros.html")) {
            breadcrumbSpan.textContent = translations[currentLanguage].about;
        } else if (currentPage.includes("descargar.html")) {
            breadcrumbSpan.textContent = translations[currentLanguage].download;
        }
    }

    // Update form labels if on contact page
    const formLabels = document.querySelectorAll(".form-group label");
    formLabels.forEach((label) => {
        if (label.getAttribute("for") === "name") {
            label.textContent = translations[currentLanguage].name_label;
        } else if (label.getAttribute("for") === "email") {
            label.textContent = translations[currentLanguage].email_label;
        } else if (label.getAttribute("for") === "subject") {
            label.textContent = translations[currentLanguage].subject_label;
        } else if (label.getAttribute("for") === "message") {
            label.textContent = translations[currentLanguage].message_label;
        } else if (label.getAttribute("for") === "privacy") {
            const privacyLink = label.querySelector("a");
            if (privacyLink) {
                label.childNodes[0].textContent =
                    translations[currentLanguage].privacy_checkbox + " ";
                privacyLink.textContent =
                    translations[currentLanguage].privacy_link;
            }
        }
    });

    // Update submit button
    const submitBtn = document.querySelector(".submit-btn");
    if (submitBtn) {
        submitBtn.textContent = translations[currentLanguage].send_button;
    }

    // Update footer
    document.querySelectorAll(".footer-links h4").forEach((heading) => {
        if (heading.textContent.includes("Descargar")) {
            heading.textContent = translations[currentLanguage].footer_download;
        } else if (heading.textContent.includes("Legal")) {
            heading.textContent = translations[currentLanguage].footer_legal;
        }
    });

    // Update footer links
    document.querySelectorAll(".footer-links a").forEach((link) => {
        if (link.href.includes("terminos_uso.html")) {
            link.textContent = translations[currentLanguage].footer_terms;
        } else if (link.href.includes("p_privacidad.html")) {
            link.textContent = translations[currentLanguage].footer_privacy;
        } else if (link.href.includes("cookies.html")) {
            link.textContent = translations[currentLanguage].footer_cookies;
        }
    });

    // Update privacy policy page content
    if (window.location.pathname.includes("p_privacidad.html")) {
        document.querySelector("h1").textContent =
            translations[currentLanguage].privacy_title;
        document.querySelector(".privacy-intro").textContent =
            translations[currentLanguage].privacy_intro;

        // Update sections
        const sections = document.querySelectorAll(".privacy-section");
        sections.forEach((section, index) => {
            const sectionNum = index + 1;
            const titleKey = `privacy_section${sectionNum}_title`;
            const contentKey = `privacy_section${sectionNum}_content`;
            const listKey = `privacy_section${sectionNum}_list`;

            if (translations[currentLanguage][titleKey]) {
                section.querySelector("h2").textContent =
                    translations[currentLanguage][titleKey];
            }
            if (translations[currentLanguage][contentKey]) {
                section.querySelector("p").textContent =
                    translations[currentLanguage][contentKey];
            }
            if (translations[currentLanguage][listKey]) {
                const ul = section.querySelector("ul");
                if (ul) {
                    ul.innerHTML = translations[currentLanguage][listKey]
                        .map((item) => `<li>${item}</li>`)
                        .join("");
                }
            }
        });
    }

    // Update terms of use page content
    if (window.location.pathname.includes("terminos_uso.html")) {
        document.querySelector("h1").textContent =
            translations[currentLanguage].terms_title;
        document.querySelector(".terms-intro").textContent =
            translations[currentLanguage].terms_intro;

        // Update sections
        const sections = document.querySelectorAll(".terms-section");
        sections.forEach((section, index) => {
            const sectionNum = index + 1;
            const titleKey = `terms_section${sectionNum}_title`;
            const contentKey = `terms_section${sectionNum}_content`;
            const listKey = `terms_section${sectionNum}_list`;

            if (translations[currentLanguage][titleKey]) {
                section.querySelector("h2").textContent =
                    translations[currentLanguage][titleKey];
            }
            if (translations[currentLanguage][contentKey]) {
                section.querySelector("p").textContent =
                    translations[currentLanguage][contentKey];
            }
            if (translations[currentLanguage][listKey]) {
                const ul = section.querySelector("ul");
                if (ul) {
                    ul.innerHTML = translations[currentLanguage][listKey]
                        .map((item) => `<li>${item}</li>`)
                        .join("");
                }
            }
        });
    }
}

function updateLanguageButton(lang) {
    const button = document.querySelector(".language-switcher button");
    if (button) {
        button.textContent = lang === "es" ? "🌍 Español ▼" : "🌍 English ▼";
    }
}

// Initialize language from localStorage or default to Spanish
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "es";
    changeLanguage(savedLanguage);

    // Add click events to language options
    document.querySelectorAll(".language-switcher li").forEach((li) => {
        li.addEventListener("click", () => {
            const lang = li.textContent.includes("English") ? "en" : "es";
            changeLanguage(lang);
        });
    });
});
