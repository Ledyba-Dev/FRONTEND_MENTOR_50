const form = document.querySelector(".form");
const errorIcon = document.getElementById("errorIcon");
const inputEmail = document.getElementById("email");
const errorParagraph = document.querySelector(".errorParagraph");

// Expresión regular para validar el formato del correo electrónico
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valueInputEmail = inputEmail.value;
    let isValueEmail = true;

    if (!valueInputEmail) {
        isValueEmail = false;
    }

    if (!EMAIL_REGEX.test(valueInputEmail)) {
        isValueEmail = false;
    }

    if (valueInputEmail.length > 40) {
        isValueEmail = false;
    }

    if (!isValueEmail) {
        inputEmail.classList.add("error");
        errorIcon.style.display = "block";
        errorParagraph.style.display = "block";
        return;
    }

    // EL USUARIO INGRESÓ UN EMAIL CORRECTO
    inputEmail.classList.remove("error");
    errorIcon.style.display = "none";
    errorParagraph.style.display = "none";
    console.log("Email válido enviado");
    form.reset();
});

inputEmail.addEventListener("input", (event) => {
    const valueEmail = event.target.value;
    let isValueEmail = true;

    // Validamos el formato del email
    if (!EMAIL_REGEX.test(valueEmail)) {
        isValueEmail = false;
    }

    // Validamos la longitud máxima
    if (valueEmail.lenght > 40) {
        isValueEmail = false;
    }

    // ACTUALIZAR LA INTERFAZ SEGUN LA VALIDACIÓN
    if (!isValueEmail) {
        inputEmail.classList.add("error");
        errorIcon.style.display = "block";
        errorParagraph.style.display = "block";
    } else {
        inputEmail.classList.remove("error");
        errorIcon.style.display = "none";
        errorParagraph.style.display = "none";
    }

    if (valueEmail === "") {
        inputEmail.classList.remove("error");
        errorIcon.style.display = "none";
        errorParagraph.style.display = "none";
    }
});
