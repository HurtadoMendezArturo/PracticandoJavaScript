let helado = prompt("Ingresa el tipo de Membresia A - B - C");

let a = 0.10;
let b = 0.15;
let c = 0.20;

let PrecioFresa = 20;
let PrecioCoco = 10;
let PrecioChocolate = 30;
let PrecioLucma = 25;

let descuentoA1 = PrecioFresa * a;
let descuentoA2 = PrecioCoco * a;
let descuentoA3 = PrecioChocolate * a;
let descuentoA4 = PrecioLucma * a;

let descuentoB1 = PrecioFresa * b;
let descuentoB2 = PrecioCoco * b;
let descuentoB3 = PrecioChocolate * b;
let descuentoB4 = PrecioLucma * b;

let descuentoC1 = PrecioFresa * c;
let descuentoC2 = PrecioCoco * c;
let descuentoC3 = PrecioChocolate * c;
let descuentoC4 = PrecioLucma * c;



if (helado == "A" || helado == "a") {
    document.write("Tienes la Membresía A te corresponde un descuento del 10% ");
    let escogeHelado = prompt("Que helado vas a escoger hay: FRESA - COCO - CHOCOLATE - LUCMA")

        if (escogeHelado == "FRESA" || escogeHelado == "fresa") {
            document.write(`El precio del helado de FRESA es $${PrecioFresa} tu descuento es de $${descuentoA1} en total tu cuenta es de $${PrecioFresa - descuentoA1}`);

        }else if (escogeHelado == "COCO" || escogeHelado == "coco") {
            document.write(`El precio del helado de COCO $${PrecioCoco} tu descuento es de $${descuentoA2} en total tu cuenta es de $${PrecioCoco - descuentoA2}`);

        }else if (escogeHelado == "CHOCOLATE" || escogeHelado == "chocolate") {
            document.write(`El precio del helado de CHOCOLATE $${PrecioChocolate} tu descuento es de $${descuentoA3} en total tu cuenta es de $${PrecioChocolate - descuentoA3}`);
            
        }else if (escogeHelado == "LUCMA" || escogeHelado == "lucma") {
            document.write(`El precio del helado de LUCMA $${PrecioLucma} tu descuento es de $${descuentoA4} en total tu cuenta es de $${PrecioLucma - descuentoA4}`);
        } else {
            document.write("No haz escogido ningun helado");
        }  

}else if (helado == "B" || helado == "b") {
    document.write("Tienes la Membresía B te corresponde un descuento del 15% ");
    let escogeHelado =  prompt("Que helado vas a escoger hay: FRESA - COCO - CHOCOLATE - LUCMA")

        if (escogeHelado == "FRESA" || escogeHelado == "fresa") {
            document.write(`El precio del helado de FRESA es $${PrecioFresa} tu descuento es de $${descuentoB1} en total tu cuenta es de $${PrecioFresa - descuentoB1}`);

        }else if (escogeHelado == "COCO" || escogeHelado == "coco") {
            document.write(`El precio del helado de COCO $${PrecioCoco} tu descuento es de $${descuentoB2} en total tu cuenta es de $${PrecioCoco - descuentoB2}`);
            
        }else if (escogeHelado == "CHOCOLATE" || escogeHelado == "chocolate") {
            document.write(`El precio del helado de CHOCOLATE $${PrecioChocolate} tu descuento es de $${descuentoB3} en total tu cuenta es de $${PrecioChocolate - descuentoB3}`);
            
        }else if (escogeHelado == "LUCMA" || escogeHelado == "lucma") {
            document.write(`El precio del helado de LUCMA $${PrecioLucma} tu descuento es de $${descuentoB4} en total tu cuenta es de $${PrecioLucma - descuentoB4}`);
        } else {
            document.write("No haz escogido ningun helado");
        }  

    
}else if (helado == "C" || helado == "c") {
    document.write("Tienes la Membresía C te corresponde un descuento del 20% ");
    let escogeHelado =  prompt("Que helado vas a escoger hay: FRESA - COCO - CHOCOLATE - LUCMA")

        if (escogeHelado == "FRESA" || escogeHelado == "fresa") {
            document.write(`El precio del helado de FRESA es $${PrecioFresa} tu descuento es de $${descuentoC1} en total tu cuenta es de $${PrecioFresa - descuentoC1}`);

        }else if (escogeHelado == "COCO" || escogeHelado == "coco") {
            document.write(`El precio del helado de COCO $${PrecioCoco} tu descuento es de $${descuentoC2} en total tu cuenta es de $${PrecioCoco - descuentoC2}`);
            
        }else if (escogeHelado == "CHOCOLATE" || escogeHelado == "chocolate") {
            document.write(`El precio del helado de CHOCOLATE $${PrecioChocolate} tu descuento es de $${descuentoC3} en total tu cuenta es de $${PrecioChocolate - descuentoC3}`);
            
        }else if (escogeHelado == "LUCMA" || escogeHelado == "lucma") {
            document.write(`El precio del helado de LUCMA $${PrecioLucma} tu descuento es de $${descuentoC4} en total tu cuenta es de $${PrecioLucma - descuentoC4}`);
        } else {
            document.write("No haz escogido ningun helado");
        }  

} else {
    document.write("No tienes ninguna Menbresía");
} 