document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de menú cargado");

    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    if (!hamburgerButton) {
        console.error('Elemento hamburger no encontrado');
    }
    if (!navMenu) {
        console.error('Elemento navMenu no encontrado');
    }
    if (!overlay) {
        console.error('Elemento overlay no encontrado');
    }

    if (!hamburgerButton || !navMenu || !overlay) {
        return;
    }

    console.log("Todos los elementos encontrados");

    // Función para alternar el menú
    function toggleMenu() {
        hamburgerButton.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevenir scroll cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }

    // Event listeners
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al presionar escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        const isMenuOpen = navMenu.classList.contains('active');
        if (isMenuOpen && !hamburgerButton.contains(e.target) && !navMenu.contains(e.target)) {
            toggleMenu();
        }
    });

    // Cerrar menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 