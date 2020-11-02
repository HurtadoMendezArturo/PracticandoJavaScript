let numero = prompt("Ingresa un número entero");
let entero = -1;
let resultado = numero * entero;

if (numero < 0) {
    document.write(`El número entero es ${numero} y su absoluto es ${resultado}`);
}else if (numero > 0) {
    document.write(`El número es ${numero}`)
}else{
    document.write("No ingresaste un número");
}