/*Cadena de texto*/

let nombre = "Arturo";
let apellido = "H-M";
let saludo = new String("Hola mundo");
let lorem = "lorem ipsum dudbbb uhuioohffl huhduhduf ipsum  dyufgcv vvfrts uusgdg ipsum ddjjndbbfbd hchduc ipsum  gfdjhdeídfg";


console.log(nombre, apellido, saludo);

console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("ipsum"),
    lorem.includes("Arturo"),
    lorem.trim(),
    lorem.split(""),
    lorem.split(",")
); 