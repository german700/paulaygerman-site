//C:\Users\germa\Desktop\paulaygerman-site\paulaygerman-site\script.js
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if ((username === "german700" || username === "paulis") && password === "señoradelosfritos") {
        // Guardamos el usuario en sessionStorage
        sessionStorage.setItem("user", username);
        // Redirigir a la página principal
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }


}
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section").forEach(section => {
        section.style.transition = "opacity 1s ease-in-out";
    });

    let sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
                section.style.opacity = "1";
            } else {
                section.style.opacity = "0.3";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mensaje = document.getElementById("mensaje");

    if (mensaje) {
        const frases = [
            "¡Gracias por darle a la derecha en bumble!",
            "¡Gracias por haber viajado a Montería a conocerme!💖",
            "¡Gracias por aceptar salir con un total extraño a solas!🤭",
            "¡Gracias por no salir disparada del carro cuando manejé por esa zona oscura!",
            "¡Gracias por quedarte otro día más para salir conmigo! 💕",
            "¡Gracias por permitirme ser tu primer beso, el beso más mágico de toda mi vida! 🌟",
            "¡Gracias por compartir tu limonada conmigo!🤭",
            "¡Gracias por ser tan amable, comprensiva y tan linda persona!",
            "¡Gracias porque aún en las complejidades de tu instancia en Santa Marta, hiciste siempre el máximo esfuerzo para hablar conmigo!",
            "¡Gracias por volver de santa marta y verte conmigo!",
            "¡Gracias por ser mi novia!",
            "¡Gracias por ser la primera persona a la que le di flores!",
            "¡Gracias por esa noche!🌟",
            "¡Gracias por mis figuras de luffy, las amo demasiado!🌟",
            "¡Gracias, porque es verdad que siempre fuiste tú quien hacía un esfuerzo incomensurable para venir a verme!💕",
            "¡Gracias por aguantar esos caprichos!",
            "¡Gracias por ser tú!",
            "¡Gracias por amarme!💖",
            "Me siento muy amado por ti",
            "¡Gracias por permitirme estar en tu vida!",
            "¡Me siento muy afortunado de tenerte!",
            "Gracias por confiar en mí aún desde la distancia. La lealtad es de las cosas que más valoro, y nunca dudé de la tuya, amo que me causes esa tranquilidad, Paula. 💖",
            "¡Gracias por ser tan comprensiva!",
            "¡Gracias por tus playlists de música!",
            "¡Gracias por presentarme a tu familia!",
            "¡Gracias por amarme 💕(está repetido sí, pero no es un error)!",
            "¡Gracias por dejar que yo te ame!",
            "¡Gracias por ir a playa conmigo!🌟",
            "¡Gracias!",
        ];
        let index = 0;

        mensaje.addEventListener("click", function () {
            mensaje.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % frases.length;
                mensaje.textContent = frases[index];

                // Calcula nuevas posiciones aleatorias dentro de la pantalla visible
                let newX = Math.random() * (window.innerWidth - 100); // Ajuste para que no salga de la pantalla
                let newY = Math.random() * (window.innerHeight - 50);

                mensaje.style.left = `${newX}px`;
                mensaje.style.top = `${newY}px`;

                mensaje.style.opacity = 1;
            }, 500);
        });
    }
    if (volver) {
        volver.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }
});