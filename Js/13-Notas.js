let uno = prompt("Ingrese la primera nota");
let dos = prompt("Ingrese la segunda nota");
let tres = prompt("Ingrese la tercera nota");

let suma = parseInt(uno) + parseInt(dos) + parseInt(tres);
let notaFinal = suma / 3;

if (notaFinal >= 11 && notaFinal <= 20) {
    document.write(`El alumno tiene una nota de ${notaFinal} esta aprobado.`);
}else if (notaFinal <= 10 && notaFinal >= 0) {
    document.write(`El alumno tiene una nota de ${notaFinal} esta desaprobado.`);
}else{
    document.write("Haz ingresado mal las notas.");
}