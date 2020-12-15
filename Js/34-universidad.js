// La universidad ha categorizado las matrículas de acuerdo a la facultad que va a estudiar el postulante. Ingrese por teclado el nombre del postulante y la facultad que va a estudiar, muestre el importe, la mensualidad, el IGV 18% (importe + mensualidad) y el monto final a pagar.

let nombre = prompt("Ingrese en nombre del postulante");
let facultad = prompt("INGRESE LA FACULTAD \nIng. de Sistemas \nDerecho \nIng. Naviera \nIng. Pesquera \nContabilidad \nAdministración")

let igv = 1.18;

let sistemasImporte = 350;
let sistemasMensualidad = 650;
let totalPagarSistema = (sistemasImporte + sistemasMensualidad) * igv;

let derechoImporte = 300;
let derechoMensualidad = 550;
let totalPagarDerecho = (derechoImporte + derechoMensualidad) * igv;

let navieraImporte = 300;
let navieraMensualidad = 500;
let totalPagarNaviera = (navieraImporte + navieraMensualidad) * igv;

let pesqueraImporte = 310;
let pesqueraMensualidad = 460;
let totalPagarPesquera = (pesqueraImporte + pesqueraMensualidad) * igv;

let contabilidadImporte = 280;
let contabilidadMensualidad = 490;
let totalPagarContabilidad = (contabilidadImporte + contabilidadMensualidad) * igv;

let admninistracionImporte = 360;
let administracionMensualidad = 520;
let totalPagarAdministracion = (admninistracionImporte + administracionMensualidad) * igv;

switch (facultad) {
    case "ing de sistemas":
        document.write(`La facultad de ${facultad} tiene un importe de ${sistemasImporte} soles,<br> y la mensualidad es de ${sistemasMensualidad} soles,<br> el IGV es ${igv}%<br> el monto a pagar en total sera de ${totalPagarSistema} soles.`);
        break;
    
    case "derecho":
        document.write(`La faculdad de ${facultad} tiene un importe de ${derechoImporte} soles,<br> y la mensualidad es de ${derechoMensualidad} soles,<br> el IGV es ${igv}%<br> el   monto a pagar en total sera de ${totalPagarDerecho} soles.`);
        break;

    case "naviera":
        document.write(`La facultad de ${facultad} tiene un importe de ${navieraImporte} soles,<br> y la mensualidad es de ${navieraMensualidad} soles,<br> el IGV es ${igv}%<br> el monto a pagar em total sera de ${totalPagarNaviera} soles.`);
        break;

    case "pesquera":
        document.write(`La facultad de ${facultad} tiene un importe de ${pesqueraImporte} soles,<br> y la mensualidad es de ${pesqueraMensualidad} soles,<br> el IGV es ${igv}%<br> el monto a pagar en total sera de ${totalPagarPesquera} soles.`);
        break;

    case "contabilidad":
        document.write(`La facultad de ${facultad} tiene un importe de ${contabilidadImporte} soles,<br> y la mensualidad es de ${contabilidadMensualidad} soles,<br> el IGV es ${igv}%<br> el monto a pagar en total sera de ${totalPagarContabilidad} soles.`);
        break;
    
    case "administracion":
        document.write(`La facultad de ${facultad} tiene un importe de ${admninistracionImporte} soles,<br> y la mensualidad es de ${administracionMensualidad} soles,<br> el IGV es ${igv}%<br> el monto a pagar en total sera de ${totalPagarAdministracion} soles.`);
        break;

    default:
        document.write(`ERROR la facultad ${facultad} . Debes ingresar un afacultad que esta en la lista.`)
        break;
}