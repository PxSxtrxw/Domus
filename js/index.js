// script.js

document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.cuadro');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            
            if (target) {
                // Desplazamiento suave
                window.scrollTo({
                    top: target.offsetTop - 70, // Ajusta el valor si es necesario
                    behavior: 'smooth'
                });
            }
        });
    });
});
