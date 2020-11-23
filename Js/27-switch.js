let premio = prompt("Hay 5 habitaciones en una de ellas esta la salida,  en cada una de ellas hay una prueba debes de ingresar del 1 - 5 para saber donde esta tu libertad");

switch (premio) {
    case "1":
        document.write(`La puerta número ${premio} hay dos frutos una manzana y una naranja debes escoger el indicado para tu libertad`);
            let fruta = prompt("Escoge una de las frutas manzana o naranja")

            if (fruta == "manzana" || fruta == "MANZANA") {
                document.write(` La ${fruta} esta envenenada, estas muerto.`);

            }else if (fruta == "naranja" || fruta == "NARANJA") {
                document.write(` La ${fruta} es ta fruta indicada tienes tu libetad.`);

            }else {
                document.write(` Error ${fruta} ingresaste mal la fruta.`);
            }
        break;

    case "2":
        document.write(`La puerta número ${premio} hay un león`);
        break;

    case "3":
        document.write(`La puerta número ${premio} esta tu premio`);
        break;

    case "4":
        document.write(`La puerta númeero ${premio} hay un Ejercicio de matemáticas para tu libertad debes de resolberlo`);
            let mate = prompt("Solo tienes una oportunidad cuanto es el 10% de 850?")

            if (mate >= 0 && mate <= 84 && mate >= 86) {
                document.write(` ${mate} no es el 10% de 850, perdiste`);

            }else if (mate == 85) {
                document.write(` ${mate} si es el 10% de 850, ganaste tu libertad.`)

            }else {
                document.write(" Debes de ingresar solo números, perdiste.");   
            } 
        break;

    case "5":
        document.write(`La puerta número ${premio} hay un vaso de refresco`);
        
        break;
    default:
        document.write(`Error solo debes ingresar del 1 - 5.`);
        break;
}