
let respuesta = prompt("ES CULPABLE RESPONDA SI - NO");

if(respuesta == "si") {
    document.write(`EL acusado respondio ${respuesta} es culpable`);
}else if (respuesta == "no") {
    document.write(`El acusado respondio ${respuesta} es inocente`);
}else{
    document.write("Solo puede responder son SI - NO");
}