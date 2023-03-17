// Selecciona todos los enlaces con el atributo data-scroll
const scrollLinks = document.querySelectorAll('a[data-scroll]');

// Agrega un event listener a cada enlace
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Previene el comportamiento predeterminado del enlace
        e.preventDefault();

        // Obtiene el id de la sección a la que se está desplazando
        const scrollTarget = link.getAttribute('data-scroll');

        // Obtiene la posición de la sección en la página
        const targetPosition = document.getElementById(scrollTarget).offsetTop;

        // Calcula la posición del encabezado para descontarla de la posición de la sección
        const headerHeight = document.querySelector('header').offsetHeight;

        // Desplázate suavemente hacia la sección
        window.scrollTo({
            top: targetPosition - headerHeight,
            behavior: 'smooth'
        });
    });
});