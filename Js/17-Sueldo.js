let hora = prompt("Cuantas horas trabajaste?")

let horasNormales = 40;
let semana = 20;
let horaExtras = 25;
let horasExtrasTotales = hora - horasNormales;

if (hora == 40) {
    document.write(`Haz cumplido tus ${hora} horas semanales, tu pago es de $${hora * semana}`);

}else if (hora <= 39) {
    document.write(`Esta semana solo haz hecho ${hora} horas, tu pago es de $${hora * semana}`);

}else if (hora >= 41) {
    document.write(`Esta semana haz hecho ${horasNormales} horas y ${horasExtrasTotales} horas extra, tu pago en total es de $${horasNormales * semana + horasExtrasTotales * horaExtras}`);

}else {
    document.write("No hingresaste ninguna hora");
}