let uno = prompt ("Ingresa el primer número");
let dos = prompt ("Ingresa el segundo número");
let tres = prompt ("Ingresa el tercer número");

let suma = uno * dos;

if (suma == tres) {
    document.write(`La multiplicación del primer número ${uno} y el segundo número ${dos} ES IGUAL al tercer número ${tres}`);
} else {
    document.write(`La multiplicación del primer número ${uno} y el segundo número ${dos} NO SON IGUALES al tercer número ${tres}`);
}