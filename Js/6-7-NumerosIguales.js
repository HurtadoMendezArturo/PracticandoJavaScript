let numero_uno = prompt("Ingresa el primer número");
let numero_dos = prompt("Ingresa el segundo número");

if (numero_uno < numero_dos) {
    document.write("El numero uno es menor que el numero dos");
}else if (numero_dos < numero_uno) {
    document.write("El numero dos es menor que el numero uno");
}else if (numero_dos == numero_uno) {
    document.write("Los numeros son iguales");
}else {
    document.write("Ingresaste mal el numero");
}  