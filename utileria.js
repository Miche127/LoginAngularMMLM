function validarCorreo(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarLetras(texto) {
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/;
    return regex.test(texto);
}

function validarLongitudNumero(numero, maxLength) {
    return numero.toString().length <= maxLength;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function validarMayorEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarContraseña(contraseña) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(contraseña);
}
