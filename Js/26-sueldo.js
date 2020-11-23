let años = prompt("Se te aplicara un aumento de acuerdo a los años trabajados en la empresa. INGRESE CUANTOS AÑOS TIENE TRABAJANDO EN NUESTRA EMPRES");

let sueldoAnual = 40000;

let bonoUno = 0.10;
let bonoDos = 0.07;
let bonoTres = 0.05;
let bonoCuatro = 0.03;

let aumentoUno = sueldoAnual * bonoUno;
let aumentoDos = sueldoAnual * bonoDos;
let aumentoTres = sueldoAnual * bonoTres;
let aumentoCuatro = sueldoAnual * bonoCuatro;



if (años >= 11) {
    document.write(`Tu trabajaste para la empresa más de 11 años te corresponde un aumento de 10% que es de $${aumentoUno}, desde ahora tu sueldo sera de $${aumentoUno + sueldoAnual}.`);

}else if (años >= 6 && años <= 10) {
    document.write(`Tu trabajaste para la empresa más de 6 años pero menos de 10 años te corresponde un aumento de 7% que es de $${aumentoDos}, desde ahora tu sueldo sera de $${aumentoDos + sueldoAnual}.`);

}else if (años >= 3 && años <= 5) {
    document.write(`Tu trabajaste para la empresa más de 3 años pero menos de 5 años te corresponde un aumento de 5% que es de $${aumentoTres}, desde ahora tu sueldo sera de $${aumentoTres + sueldoAnual}.`);
    
}else if (años <= 2) {
    document.write(`Tu trabajaste para la empresa menos de 2 años te corresponde un aumento de 3% que es de $${aumentoCuatro}, desde ahora tu sueldo sera de $${aumentoCuatro + sueldoAnual}.`);
} else {
    document.write(`Error ingresaste comando (${años}). Debes ingresar solo números.`);
} 