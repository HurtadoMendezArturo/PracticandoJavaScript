let hora = prompt("Ingresa solo la hora (1-12) si es las 1:00 solo ingresa 1");
let minutos = prompt("Ingresa solo los minutos si es 1:30 solo ingresa 30");

let HoraEnSegundos = (hora * 60) * 60;
let MinutosEnSegundos = minutos * 60;
let suma = HoraEnSegundos + MinutosEnSegundos;



    document.write(`La hora que ingresaste es ${hora}:${minutos}. La hora en segundos es ${suma}`);
