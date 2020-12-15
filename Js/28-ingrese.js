let ingrese = prompt("Ingrese un número desde el 0 hasta el 99999");

if (ingrese < 10) {
    document.write(`El número ${ingrese} tiene una cifra.`);

}else if (ingrese < 100) {
    document.write(`El número ${ingrese} tiene dos cifras.`);

}else if (ingrese < 1000) {
    document.write(`El número ${ingrese} tiene tres cifras.`);

}else if (ingrese < 10000) {
    document.write(`El número ${ingrese} tiene cuatro cifras.`);

}else if (ingrese < 100000) {
    document.write(`El número ${ingrese} tiene cinco cifras.`);
} else {
    document.write("ERROR. Solo debes ingresar desde el 0 hasta el 99999")
}