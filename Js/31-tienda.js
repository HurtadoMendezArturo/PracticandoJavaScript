let compra = prompt("Ingrese el monto de compra");
let dia = prompt("Ingrese el dia de la semana");

let descuento = compra * 0.15;
let pagoDescuento = compra - descuento;

if (dia == "martes" || dia == "jueves") {
    document.write(`Los Martes y Jueves hay un descuento del 15%. Tu cuenta es de $${pagoDescuento}.`);

}else if (dia == "lunes" || dia == "miercoles" || dia == "viernes" || dia == "sabado" || dia == "domingo") {
    document.write(`El monto que debes pagar es de $${compra}.`);

} else {
    document.write(`Error haz ingresado (${dia}). Debes ingresar un dia de la semana.`); 
} 