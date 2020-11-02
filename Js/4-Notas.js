let nota = prompt("Ingresa la nota");

if (nota == 0 || nota <= 3) {
    document.write("Muy defciente");

}else if (nota == 4 || nota == 5) {
    document.write("Insufuciente");
    
}else if (nota == 6 || nota == 7) {
    document.write("Suficiente");
}else if (nota == 8 || nota == 9) {
    document.write("Bien");
}else if (nota == 10) {
    document.write("Sobresaliente");
}else {
    document.write("Ingresaste mal la nota")   ;
} 