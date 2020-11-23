let a = prompt ("Ingrese el primer número");
let b = prompt ("Ingrese el segundo número");
let c = prompt ("Ingrese el tercer número");
let d = prompt ("Ingrese el Cuarto número");

if (a > b && a > c && a > d) {
    document.write("El primer número es mayor");

}else if (b > a && b > c && b > d) {
    document.write("El segundo número es mayor");   

}else if (c > a && c > b && c > d) {
    document.write("El tercer nnúmero es el mayor")  ;

}else if (d > a && d > b || d > c) {
    document.write("El cuarto número es el mayor");

} else {
    document.write("Haz ingresado mal los números");
}