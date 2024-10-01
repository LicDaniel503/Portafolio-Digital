let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Manejar el envío del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    const formData = new FormData(this); // Crea un objeto FormData a partir del formulario

    // Aquí puedes enviar los datos a tu servidor
    fetch('/enviar-correo', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado correctamente');
            this.reset(); // Limpia el formulario
        } else {
            alert('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en el envío');
    });
});
