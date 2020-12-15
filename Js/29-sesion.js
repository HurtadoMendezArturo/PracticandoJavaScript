let nombre = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");

if (nombre == "arturo" && contraseña == "123456") {
    document.write(`Bienvenido al sistema ${nombre}.`);
}else {
    document.write("El usuario o cantraseña son incorrectos");
}