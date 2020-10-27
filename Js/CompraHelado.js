let helado = prompt("Que topping quieres para tu helado hay de 'OREO-> 1.00' - 'KITKAT -> 1.50' - 'BROWNIE -> 0.75' - 'LACASITOS -> 0.95' ");


let sintopping = 1.90;
let oreo = 1;
let kitkat = 1.50;
let brownie = 0.75;
let lacasitos = 0.95;



if (helado == "normal") {
    document.write(`El helado sin topping cuesta ${sintopping}$`);
}else if (helado == "oreo") {
    let toraloreo = sintopping + oreo;
    document.write(`El helado con Oreo cuesta ${toraloreo}$`);
}else if (helado == "kitkat") {
    let totalkitkat = sintopping + kitkat;
    document.write(`El helado con kitkat cuesta ${totalkitkat}$`);
}else if (helado == "brownie") {
    let totalbrownie = sintopping + brownie;
    document.write(`El helado con brownie ${totalbrownie}$`);
}else if (helado == "lacasitos") {
    let torallacasitos = sintopping + lacasitos;
    document.write(`El helado con lacasitos ${torallacasitos}$`)
} else {
    document.write("NO TENEMOS ESE TOPPING");
} 