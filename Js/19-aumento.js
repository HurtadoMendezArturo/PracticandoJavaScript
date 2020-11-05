let salario = prompt("Ingresa cuanto ganas?");

let aumentoUno = 0.05;
let aumentoDos = 0.10;

let SalarioUno = salario * aumentoUno;
let salarioTotalUno = parseInt(salario) + parseInt(SalarioUno);

let SalarioDos = salario * aumentoDos;
let salarioTotalDos = parseInt(salario) + parseInt(SalarioDos);


if (salario >= 2001) {
    document.write(`Tu salario es $${salario} es mayor a los $2000 te corresponde un aumento del 5% ahora ganaras $${salarioTotalUno} `);

}else if (salario <= 2000) {
    document.write(`Tu salario es $${salario} es menor a los $2000 te corresponde un aumento del 10% ahora ganaras $${salarioTotalDos} `);
    
} else {
    document.write("Ingresaste mal tu salario");
} 