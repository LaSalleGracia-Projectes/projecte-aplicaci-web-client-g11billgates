document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de menú cargado");

    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    if (!hamburger) {
        console.error('Elemento hamburger no encontrado');
    }
    if (!navMenu) {
        console.error('Elemento navMenu no encontrado');
    }
    if (!overlay) {
        console.error('Elemento overlay no encontrado');
    }

    if (!hamburger || !navMenu || !overlay) {
        return;
    }

    console.log("Todos los elementos encontrados");

    // Función para abrir/cerrar el menú
    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log("Toggle menú");
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    // Función para cerrar el menú
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
        console.log("Menú cerrado");
    }

    // Evento click en el hamburger
    hamburger.addEventListener('click', toggleMenu);
    console.log("Evento click añadido al hamburger");

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener('click', closeMenu);

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        const isMenuOpen = navMenu.classList.contains('active');
        if (isMenuOpen && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // Cerrar menú al redimensionar la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Asegurarse de que el menú esté cerrado al cargar la página
    closeMenu();
}); 