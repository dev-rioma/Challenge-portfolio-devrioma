// Selecciona el header y el footer
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Establece el tiempo en segundos antes de que se muestren el header y el footer nuevamente
const idleTime = 2;

// Inicializa el temporizador
let idleTimer = null;

// Oculta el header y el footer
function hideHeaderFooter() {
    header.style.transform = 'translateY(-100%)';
    footer.style.transform = 'translateY(100%)';
}

// Muestra el header y el footer
function showHeaderFooter() {
    header.style.transform = 'translateY(0)';
    footer.style.transform = 'translateY(0)';
}

// Agrega un event listener al desplazamiento de la ventana
window.addEventListener('scroll', () => {
    // Reinicia el temporizador cuando se desplaza
    clearTimeout(idleTimer);
    // Oculta el header y el footer
    hideHeaderFooter();
    // Inicia el temporizador nuevamente
    idleTimer = setTimeout(showHeaderFooter, idleTime * 1000);
});

// Oculta inicialmente el header y el footer después de que la página se haya cargado
window.addEventListener('load', () => {
    hideHeaderFooter();
    // Inicia el temporizador para mostrar el header y el footer después de un tiempo de inactividad
    idleTimer = setTimeout(showHeaderFooter, idleTime * 1000);
});