let Artefacto = prompt("Ingresa el número del Artefacto domestico:\n1:DUCHA ELECTRICA\n 2:MICROONDAS\n 3:REFRIGERADORA\n 4:FOCO AHORRADOR\n 5:FOCO INCANDESCENTE\n 6:PLANCHA\n 7:LAVADORA\n 8:HERVIDOR DE AGUA\n 9:LICUADORA\n 10:TELEVISOR\n 11:EQUIPO DE SONIDO\n 12:LAPTOP\n 13:COMPUTADORA ");

let PotenciaDE = 5500;
let PotenciaMI = 1100;
let PotenciaRE = 350;
let PotenciaFA = 20; 
let PotenciaFI = 100; 
let PotenciaPL = 1000; 
let PotenciaLA = 500; 
let PotenciaHA = 1500; 
let PotenciaLI = 300; 
let PotenciaTE = 90; 
let PotenciaES = 80; 
let PotenciaLP = 70;
let PotenciaCO = 400;

let precioPorKwh = 0.6689;

 if (Artefacto == 1) {
     let HorasDeConsumo = prompt("Ingrese cuantas horas usa la DUCHA ELECTRICA por dia");
     let DiasDeUso = prompt("Ingrese cuantos días usa la DUCHA ELECTRICA");

     document.write(`La DUCHA ELECTRICA</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaDE * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE DE LA DUCHA ELECTRICA PAGARAS $${precioPorKwh * (PotenciaDE * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 2) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el MICROONDAS por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la MICROONDAS");

    document.write(`El MICROONDAS</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaMI * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DEL MICOONDAS PAGARAS $${precioPorKwh * (PotenciaMI * HorasDeConsumo * DiasDeUso / 1000)}`);

 }else if (Artefacto == 3) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la REFRIGERADORA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la REFRIGERADORA");

    document.write(`La REFRIGERADORA </br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaRE * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA REFRIGERADORA PAGARAS $${precioPorKwh * (PotenciaRE * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 4) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el FOCO AHORRADOR por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa el FOCO AHORRADOR");

    document.write(`El FOCO AHORRADOR</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaFA * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DEL FOCO AHORRADOR PAGARAS $${precioPorKwh * (PotenciaFA * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 5) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el FOCO INCANDESCENTE por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa el FOCO INCANDESCENTE ");

    document.write(`El FOCO INCANDESCENTE </br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaFI * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DEL FOCO INCANDESCENTE  PAGARAS $${precioPorKwh * (PotenciaFI * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 6) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la PLANCHA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la PLANCHA ");

    document.write(`La PLANCHA </br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaPL * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA PLANCHA  PAGARAS $${precioPorKwh * (PotenciaPL * HorasDeConsumo * DiasDeUso / 1000)}`);
     
     
 }else if (Artefacto == 7) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la LAVADORA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la LAVADORA ");

    document.write(`La LAVADORA</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaLA * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA LAVADORA PAGARAS $${precioPorKwh * (PotenciaLA * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 8) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el HERVIDOR DE AGUA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa el HERVIDOR DE AGUA ");

    document.write(`EL HERVIDOR DE AGUA</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaHA * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE EL HERVIDOR DE AGUA PAGARAS $${precioPorKwh * (PotenciaHA * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 9) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la LICUADORA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la LICUADORA");

    document.write(`La LICUADORA</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaLI * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA LICUADORA PAGARAS $${precioPorKwh * (PotenciaLI * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 10) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el TELEVISOR por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa el TELEVISOR");

    document.write(`EL TELEVISOR</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaTE * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DEL TELEVISOR PAGARAS $${precioPorKwh * (PotenciaTE * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 11) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa el EQUIPO DE SANIDO por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa el EQUIPO DE SANIDO");

    document.write(`EL EQUIPO DE SANIDO</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaES * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DEL EQUIPO DE SANIDO PAGARAS $${precioPorKwh * (PotenciaES * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 12) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la LAPTOP por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la LAPTOP");

    document.write(`LA LAPTOP</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaLP * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA LAPTOP PAGARAS $${precioPorKwh * (PotenciaLP * HorasDeConsumo * DiasDeUso / 1000)}`);
     
 }else if (Artefacto == 13) {
    let HorasDeConsumo = prompt("Ingrese cuantas horas usa la COMPUTADORA por dia");
    let DiasDeUso = prompt("Ingrese cuantos días usa la COMPUTADORA");

    document.write(`LA COMPUTADORA</br> por ${HorasDeConsumo} hora y por ${DiasDeUso} días de uso al mes,</br> tu consumo electrico es de ${PotenciaCO * HorasDeConsumo * DiasDeUso / 1000}/kwh </br> ESTE MES POR EL CONSUMO DE LA COMPUTADORA PAGARAS $${precioPorKwh * (PotenciaCO * HorasDeConsumo * DiasDeUso / 1000)}`);
 } else {
    document.write("Error ingresaste mal el número") 
 } 
 /*
1   ->  0.02
2   ->  0.03
3   ->  0.05
4   ->  0.07
5   ->  0.08
6   ->  0.1
7   ->  0.12
8   ->  0.13
9   ->  0.15
10  ->  0.17
11  ->  0.18
12  ->  0.2
13  ->  0.22
14  ->  0.23
15  ->  0.25
16  ->  0.27
17  ->  0.28
18  ->  0.3
19  ->  0.32
20  ->  0.33
21  ->  0.35
22  ->  0.37
23  ->  0.38
24  ->  0.4
25  ->  0.42
26  ->  0.43
27  ->  0.45
28  ->  0.47
29  ->  0.48
30  ->  0.5
31  ->  0.52
32  ->  0.53
33  ->  0.55
34  ->  0.57
35  ->  0.58
36  ->  0.6
37  ->  0.62
38  ->  0.63
39  ->  0.65
40  ->  0.67
41  ->  0.68
42  ->  0.7
43  ->  0.72
44  ->  0.73
45  ->  0.75
46  ->  0.77
47  ->  0.78
48  ->  0.8
49  ->  0.82
50  ->  0.83
51  ->  0.85
52  ->  0.87
53  ->  0.88
54  ->  0.9
55  ->  0.92
56  ->  0.93
57  ->  0.95
58  ->  0.97
59  ->  0.98
60  ->  1
*/