let hombres = prompt("Ingrese la cantidad de hombres que hay");
let mujeres = prompt("Ingrese la cantidad de mujeres que hay");

let cantidad = parseInt(hombres) + parseInt(mujeres);

let porcentajeHombres = (hombres*100) / cantidad;
let porcentajeMujeres = (mujeres*100) / cantidad;

document.write(`En el aula hay un total entre hombres y mujeres ${cantidad} alumnos, y el porcentaje de los hombres es ${porcentajeHombres}% y el porcentaje de las mujeres es ${porcentajeMujeres}%.`);