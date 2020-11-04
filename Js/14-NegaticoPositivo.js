let numero = prompt("Ingrese un número");

if (numero >= 0) {
    document.write(`El número ${numero} ingresado  es positivo`);
}else if (numero <= -1) {
    document.write(`El número ${numero} ingresado  es negativo`);
} else {
    document.write("Haz ingresado mal el número");
} 