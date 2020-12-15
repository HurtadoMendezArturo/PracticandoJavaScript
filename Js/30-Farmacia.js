let costo = prompt("Ingrese el precio del medicamento.");
let forma = prompt("Ingrese la forma de pago efentivo o tajeta");

let descuento = costo * 0.05;
let pagoFinal = costo - descuento;

let recargo = costo * 0.03;
let pagoTarjeta = parseInt(costo) + parseInt(recargo);

if (forma == "efectivo" || forma == "EFECTIVO") {
    document.write(`Por pagar en efectivo tienes un descuento del 5% el precio del medicamento es de $${costo} y tu descuento es de $${descuento} en total debes pagar $${pagoFinal}.`)

}else if (forma == "tarjeta" || forma == "TARJETA") {
    document.write(`Por pagar con tarjeta tienes un recargo del 3% el precio del medicamento es de $${costo} y tu recargo es de $${recargo} en total debes pagar $${pagoTarjeta}.`)

}else {
    document.write("ERROR. Debes ingresar una forma de pago correcta. EFECTIVO O TARJETA")    
} 
