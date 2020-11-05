let numerouno = prompt ("Ingrese el primer número");
let numerodos = prompt ("Ingrese el segundo número");
let numerotres = prompt ("Ingrese el tercer número");

let suma = parseInt(numerouno) + parseInt(numerodos);

if (suma == numerotres) {
    document.write(`La suma del primer número ${numerouno} y el segundo  número ${numerodos} es igual al tercer número ${numerotres}.`)
}else{
    document.write(`La suma del primer número ${numerouno} y el segundo  número ${numerodos} no son igual al tercer número ${numerotres}.`)
}