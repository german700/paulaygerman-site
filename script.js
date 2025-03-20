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