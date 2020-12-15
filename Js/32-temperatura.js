let temperatura = prompt("Ingrese la temperatura en Centigrados");

if (temperatura <= 10) {
    document.write(`La temperatura es ${temperatura} centigrados, tipo de clima es FRIO.`);

}else if (temperatura < 10 || temperatura <= 20) {
    document.write(`La temperatura es ${temperatura} centigrados, tipo de clima es NUBLADO.`);

}else if (temperatura < 20 || temperatura <= 30) {
    document.write(`La temperatura es ${temperatura} centigrados, tipo de clima es CALUROSO.`);

}else if (temperatura > 30) {
    document.write(`La temperatura es ${temperatura} centigrados, tipo de clima es TROPICAL.`);

}else {
    document.write("ERROR, debes ingresar solo temperatura")
} 