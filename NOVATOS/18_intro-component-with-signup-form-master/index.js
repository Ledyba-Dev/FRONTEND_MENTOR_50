const regexValidators = {
    // Solo letras, entre 2 y 30 caracteres
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,30}$/,
    // Permite espacios, entre 2 y 50 caracteres
    apellido: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,50}$/,
    // Email válido usuario@dominio.com
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // Min 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
    contrasena: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

const inputs = document.querySelectorAll("input");
const formulario = document.querySelector(".formSeccion_formulario");
let inputNombreValidado = false;
let inputApellidoValidado = false;
let inputCorreoValidado = false;
let inputContrasenaValidada = false;

// validar nombre
const validarNombre = (input, mensajeErrorNombre, errorIconoNombre) => {
    if(input.value === ""){
        mensajeErrorNombre.textContent = "Este campo no puede estar vacío"
        mensajeErrorNombre.style.opacity = "1";
        errorIconoNombre.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else if (!regexValidators.nombre.test(input.value)) {
        mensajeErrorNombre.textContent = "Solo letras, entre 2 y 30 caracteres";
        mensajeErrorNombre.style.opacity = "1";
        errorIconoNombre.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else {
        mensajeErrorNombre.textContent = "";
        errorIconoNombre.style.opacity = "0";
        input.style.border = "1px solid hsl(246, 25%, 77%)"
        inputNombreValidado = true;
        console.log("Validado el nombre")
    }
}

// validar apellido
const validarApellido = (input, mensajeErrorApellido, errorIconoApellido) => {
    if(input.value === ""){
        mensajeErrorApellido.textContent = "Este campo no puede estar vacío"
        mensajeErrorApellido.style.opacity = "1";
        errorIconoApellido.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else if (!regexValidators.apellido.test(input.value)) {
        mensajeErrorApellido.textContent = "Solo letras, entre 2 y 50 caracteres";
        mensajeErrorApellido.style.opacity = "1";
        errorIconoApellido.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else {
        mensajeErrorApellido.textContent = "";
        errorIconoApellido.style.opacity = "0";
        input.style.border = "1px solid hsl(246, 25%, 77%)"
        inputApellidoValidado = true;
        console.log("Validado el apellido")
    }
}

const validarCorreo = (input, mensajeErrorCorreo, errorIconoCorreo) => {

    if(input.value === ""){
        mensajeErrorCorreo.textContent = "Este campo no puede estar vacío"
        mensajeErrorCorreo.style.opacity = "1";
        errorIconoCorreo.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else if (!regexValidators.email.test(input.value)) {
        mensajeErrorCorreo.textContent = "El correo no es válido";
        mensajeErrorCorreo.style.opacity = "1";
        errorIconoCorreo.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)";
        input.placeholder = "ejemplo@dominio.com";
        input.classList.add("error-placeholder");
    } else {
        mensajeErrorCorreo.textContent = "";
        mensajeErrorCorreo.style.opacity = "0";
        errorIconoCorreo.style.opacity = "0";
        input.style.border = "1px solid hsl(246, 25%, 77%)"
        console.log("Correo validado")
        inputCorreoValidado = true;
    }


}

const validarContrasena = (input, mensajeErrorContrasena, errorIconoContrasena) => {

    if(input.value === ""){
        mensajeErrorContrasena.textContent = "Este campo no puede estar vacío"
        mensajeErrorContrasena.style.opacity = "1";
        errorIconoContrasena.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)"
    } else if (!regexValidators.contrasena.test(input.value)) {
        mensajeErrorContrasena.textContent = "Min 8 caracteres, 1 mayúscula, 1 minúscula, 1 número";
        mensajeErrorContrasena.style.opacity = "1";
        errorIconoContrasena.style.opacity = "1";
        input.style.border = "3px solid hsl(0, 100%, 74%)";
    } else {
        mensajeErrorContrasena.textContent = "";
        mensajeErrorContrasena.style.opacity = "0";
        errorIconoContrasena.style.opacity = "0";
        input.style.border = "1px solid hsl(246, 25%, 77%)"
        console.log("Contraseña validada")
        inputContrasenaValidada = true;
    }
}

const validar = (event) => {
    if(event.target.id === "nombre"){
        const input = event.target;
        const grupo = input.parentElement.parentElement;
        const mensajeError = grupo.querySelector(".mensajeError");
        const errorIcono = grupo.querySelector(".errorIcono");
        validarNombre(input, mensajeError, errorIcono)
    }

    if(event.target.id === "apellido"){
        const input = event.target;
        const grupo = input.parentElement.parentElement;
        const mensajeError = grupo.querySelector(".mensajeError");
        const errorIcono = grupo.querySelector(".errorIcono");
        validarApellido(input, mensajeError, errorIcono)
    }

    if(event.target.id === "correo"){
        const input = event.target;
        const grupo = input.parentElement.parentElement;
        const mensajeError = grupo.querySelector(".mensajeError");
        const errorIcono = grupo.querySelector(".errorIcono");
        validarCorreo(input, mensajeError, errorIcono)
    }

    if(event.target.id === "contrasena"){
        const input = event.target;
        const grupo = input.parentElement.parentElement;
        const mensajeError = grupo.querySelector(".mensajeError");
        const errorIcono = grupo.querySelector(".errorIcono");
        validarContrasena(input, mensajeError, errorIcono)
    }
}

const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("contrasena");

const togglePassVisibility = () => {
    const type = passwordInput.type === "password" ? "text" : "password"
    passwordInput.type = type;
    togglePassword.classList.toggle("showing")
}

togglePassword.addEventListener("click", togglePassVisibility)

// Validar en tiempo real los inputs
inputs.forEach(input => {
    input.addEventListener("input", validar)
    input.addEventListener("blur", validar)
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const grupoNombre = document.querySelector(".grupoNombre");
    const mensajeErrorNombre = grupoNombre.querySelector(".mensajeError");
    const errorIconoNombre = grupoNombre.querySelector(".errorIcono");

    const apellido = document.getElementById("apellido");
    const grupoApellido = document.querySelector(".grupoApellido");
    const mensajeErrorApellido = grupoApellido.querySelector(".mensajeError");
    const errorIconoApellido = grupoApellido.querySelector(".errorIcono");

    const correo = document.getElementById("correo");
    const grupoCorreo = document.querySelector(".grupoCorreo");
    const mensajeErrorCorreo = grupoCorreo.querySelector(".mensajeError");
    const errorIconoCorreo = grupoCorreo.querySelector(".errorIcono");

    const contrasena = document.getElementById("contrasena");
    const grupoContrasena = document.querySelector(".grupoContrasena");
    const mensajeErrorContrasena = grupoContrasena.querySelector(".mensajeError");
    const errorIconoContrasena = grupoContrasena.querySelector(".errorIcono");

    // validarNombre
    validarNombre(nombre, mensajeErrorNombre, errorIconoNombre)
    // validarApellido
    validarApellido(apellido, mensajeErrorApellido, errorIconoApellido)
    // validarCorreo
    validarCorreo(correo, mensajeErrorCorreo, errorIconoCorreo)
    // validarContrasena
    validarContrasena(contrasena, mensajeErrorContrasena, errorIconoContrasena)

    if(inputNombreValidado && inputApellidoValidado && inputCorreoValidado && inputContrasenaValidada) {
        console.log("TODAS LAS VALIDACIONES PASARON")
    }
    else {
        console.log("LAS VALIDACIONES NO PASARON")
    }
});

// let inputNombreValidado = false;
// let inputApellidoValidado = false;
// let inputCorreoValidado = false;
// let inputContrasenaValidada = false;