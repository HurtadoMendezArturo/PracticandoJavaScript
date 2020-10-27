/*Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
- En caso afirmativo el usuario responderá si
- En caso contrario responderá no.
*/

let respuesta = prompt("ES CULPABLE RESPONDA SI - NO");

if(respuesta == "si") {
    document.write(`EL acusado respondio ${respuesta} es culpable`);
}else if (respuesta == "no") {
    document.write(`El acusado respondio ${respuesta} es inocente`);
}else{
    document.write("Solo puede responder son SI - NO");
}
