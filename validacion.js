//Haz tú validación en javascript acá

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // campos no esten vacios
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    //correo
    var correo = /^\S+@\S+\.\S+$/;
    if (!correo.test(email)) {
        alert("Por favor, introduzca un correo electrónico válido.");
        return false;
    }
}