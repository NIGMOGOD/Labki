const togglePasswordVisibility = (inputId, iconId) => {
    const passwordField = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
};

document.getElementById("toggle-password").addEventListener("click", () => {
    togglePasswordVisibility("password", "toggle-password");
});

document.getElementById("toggle-confirm-password").addEventListener("click", () => {
    togglePasswordVisibility("confirm-password", "toggle-confirm-password");
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === confirmPassword) {
        alert("You are welcome!");
        errorMessage.textContent = ""; 
    } else {
        errorMessage.textContent = "Нужно ввести одинаковые значения";
    }
});