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
