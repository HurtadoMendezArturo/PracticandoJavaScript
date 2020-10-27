//Cadena de texto

/*
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
*/

// Template Strings

let nombre = "Arturo";
let apellido = "H-M";

let saludo = "Hola mi nombre es " + nombre + " " + apellido;
console.log(saludo);

// template string

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);

let ul = `
<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
</ul>
`

console.log(ul);