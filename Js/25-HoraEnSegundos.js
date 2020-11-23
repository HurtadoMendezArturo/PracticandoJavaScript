let hora = prompt("Ingresa solo la hora (1-12) si es las 1:00 solo ingresa 1");
let minutos = prompt("Ingresa solo los minutos si es 1:30 solo ingresa 30");

let HoraEnSegundos = (hora * 60) * 60;
let MinutosEnSegundos = minutos * 60;
let suma = HoraEnSegundos + MinutosEnSegundos;


if (hora >= 13) {
    document.write(`Ingresaste ${hora} horas. Solo debes ingresar la hora 1 - 12 horas`)
}else if (minutos >= 61) {
    document.write(`Ingresaste ${minutos} minutos. Solo debes ingresar de 1 - 60 minutos`)
} else {
    document.write(`La hora que ingresaste es ${hora}:${minutos}. La hora en segundos es ${suma} segundos.`);
} 