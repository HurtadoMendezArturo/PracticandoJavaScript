let cajero = prompt("Opción 1 ingresar dinero a la cuenta \nOpción 2 retirar dinero de la cuenta \nOpcion 3 Salir");


let ahorros = 1000;
// let deposito = 1000 + cajero;
// let retiro = 1000 - cajero;




switch (cajero) {
    case "1":
        let deposito = prompt("Ingrese la cantidad que desea depositar en su cuenta.")
        let cuentaActual = parseInt(ahorros) + parseInt(deposito);
        document.write(`Tu cuenta ahorros es de ${ahorros} soles,<br> Haz depositado ${deposito} soles,<br> Tu cuenta actual es de ${cuentaActual} soles`);
        break;

    case "2":
        let retiro = prompt("Ingrese la cantidad que desea retirar de su cuenta.")
        let cuentaActual2 = ahorros - retiro;
        document.write(`Tu cuenta de ahorros es de ${ahorros} soles,<br> Haz retirado ${retiro} soles,<br> Tu cuenta actual es de ${cuentaActual2} soles`);
        break;

    default:
        break;
}