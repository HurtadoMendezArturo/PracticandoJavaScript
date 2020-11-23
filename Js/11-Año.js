//Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.
let año_actual = prompt("Escribe el Año actual");;
let cualquier_año = prompt("Escribe cualquier año");




if ( año_actual > cualquier_año) {
    document.write(` Para llegar a ${cualquier_año} faltan ${año_actual - cualquier_año} años`);
    
}else if (año_actual < cualquier_año) {
    document.write(`Desde ${cualquier_año} han pasado ${año_actual-cualquier_año} años`);

}else if (año_actual === cualquier_año) {
    document.write("Ingresaste el mismo año");

}else if (año_actual - cualquier_año === 1) {
    document.write(`Para llegar al año ${cualquier_año} falta ${año_actual / cualquier_año}`)
} else {
    
} {
    
} 
// Aun no termino