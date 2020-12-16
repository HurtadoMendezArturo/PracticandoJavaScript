// En una tienda se ha establecido la siguiente oferta: por compras menores a 50 soles se hace un descuento de 8%, pero para compras a partir de 50 el descuento es de 10%. Se pide ingresar la cantidad y el precio del producto que se compra y determinar cuanto se descontará y cuanto se cobrará.

let compras = prompt("Ingrese el total de las compras");

let menosCincuenta = 0.08;
let masCincuenta = 0.10;

let comprasUno = compras * menosCincuenta;
let descuentoUno = compras - comprasUno; 

let comprasDos = compras * masCincuenta;
let descuentoDos = compras - comprasDos;

if (compras < 50) {
    document.write(`Tus compras son de ${compras} soles no superan los 50 soles, te corresponde un descuento del 8% se descontara ${comprasUno} soles en total usted pagara ${descuentoUno} soles.`);

}else if (compras >= 50) {
    document.write(`Tus compras son de ${compras} soles no superan los 50 soles, te correcponde un descuento del 10% se descontara ${comprasDos} soles en total usted pagara ${descuentoDos} soles.`);
} else {
    document.write("ERROR. ingrese el total de las compras.");
}