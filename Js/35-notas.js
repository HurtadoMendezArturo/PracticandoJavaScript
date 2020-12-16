let notaUno = prompt("Ingrese la primera nota");
let notaDos = prompt("Ingrese la segunda nota");
let notaTres = prompt("Ingrese la tercera nota");
let notaCuatro = prompt("Ingrese la cuarta nota");

let final = notaUno*0.20 + notaDos*0.20 + notaTres*0.30 + notaCuatro*0.30

document.write(`la nota final es ${final}`);