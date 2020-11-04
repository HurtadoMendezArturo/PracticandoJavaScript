let zapatos = prompt("Cuantos zapatos vas a comprar");
let precio = 80;

let DescuentoDiez = 0.10;
let DescuentoVeinte = 0.20;
let DescuentoCuarenta = 0.40;

if (zapatos >= 10 && zapatos <=19 ) {
    
    let DiezZapatos = zapatos * precio;
    let Descuento10 = DiezZapatos * DescuentoDiez;
    let PrecioTotalDiez = DiezZapatos - Descuento10;

    document.write(`El cliente conpro ${zapatos} zapatos, tiene un descuento de $${Descuento10} en total debe pagar $${PrecioTotalDiez}`);
    

}else if (zapatos >= 20 && zapatos <= 29) {

    let VeinteZapatos = zapatos * precio;
    let Descuento20 = VeinteZapatos * DescuentoVeinte;
    let PrecioTotalVeinte = VeinteZapatos - Descuento20;

    document.write(`El cliente compro ${zapatos} zapatos, tiene un descuento de $${Descuento20} en total debe pagar $${PrecioTotalVeinte}`);
    
}else if (zapatos >=30) {

    let CuarentaZapatos = zapatos * precio;
    let Descuento40 = CuarentaZapatos * DescuentoCuarenta;
    let PrecioTotalCuarenta = CuarentaZapatos - Descuento40;

    document.write(`El cliente compro ${zapatos} zapatos, tiene un descuento de $${Descuento40} en total debe pagar $${PrecioTotalCuarenta}`);
    
} else {
    document.write(`Tu compra es de ${zapatos} zapatos, Para que tengas descuento debe de ser mayor a 10 zapatos`);
} 