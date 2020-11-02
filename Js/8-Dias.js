let dia_semana = prompt ("Ingresa un día de la semana");

if (dia_semana == "lunes") {
    document.write("Es el primer dia de la samana");
}else if (dia_semana == "viernes") {
    document.write("Es fin de la semana");
}else if (dia_semana == "sabado" || dia_semana == "domingo") {
    document.write("Es dia de descanzo");
}else{
    document.write("Es hora de trabajar");
}  