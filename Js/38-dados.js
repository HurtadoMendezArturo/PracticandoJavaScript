// En un casino de juegos se desea mostrar los mensajes respectivos por el puntaje obtenido en el lanzamiento de tres dados de un cliente, de acuerdo a los siguientes resultados:
// ---> Si los tres dados son seis, mostrar el mensaje “Excelente”
// ---> Si dos dados se obtienen seis, mostrar el mensaje “Muy bien”
// ---> Si un dado se obtiene seis, mostrar el mensaje “Regular”
// ---> Si ningún dado se obtiene seis, mostrar el mensaje “Pésimo”

let dadoUno = prompt("Lanza el primer dado");
let dadoDos = prompt("Lanza el segundo dado");
let dadoTres = prompt("Lnaza el tercer dado");

if (dadoUno == 6 && dadoDos == 6 && dadoTres == 6) {
    document.write(`En los 3 dados a salido el número ${dadoUno}, Excelente.`);

}else if ((dadoUno == 6 && dadoDos == 6) || ( dadoUno == 6 && dadoTres == 6) || (dadoDos == 6 && dadoTres == 6)) {
    document.write(`En 2 dados a salido el número 6. Muy bein.`)

}else if (dadoUno == 6 || dadoDos == 6|| dadoTres == 6 ) {
    document.write(`En 1 dado salio 6, Regular.`);
} else {
    document.write("En ningun dado dalio 6")
}