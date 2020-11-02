let edad = prompt("Cuantos años tienes");

if (edad >= 18) {
    document.write("Eres mayor de edad ya pudes conducir")
}else if (edad <=17 && edad >=0) {
    document.write("Eres menor de edad no puedes conducir");
} else {
    document.write("No has ingresado una edad");
} 