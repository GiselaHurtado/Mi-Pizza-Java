
const levadura = '30 gramos de Levadura fresca';
const agua = '2½ tazas de Agua tibia';
const aceiteDeOliva = '2 cucharadas soperas de Aceite de Oliva';
const harina = 'Harina de fuerza';
const sal = '1 cucharadita de Sal fina';
const tiempoReposo = '45 min';
const tiempoHorneado = '10 min';

function mezclarLevaduraConAgua() {
    console.log(`Mezclar ${levadura} con ${agua}`);
}

function añadirAceite() {
    console.log(`Añadir ${aceiteDeOliva}`);
}

function añadirHarinaYSal() {
    console.log(`Añadir ${harina}`);
    console.log(`Añadir ${sal}`);
}

function amasarMasa() {
    console.log('Amasar bien hasta que la masa deje de ser pegajosa');
}

function dividirMasa() {
    console.log('Darle forma a la masa para 4 pizzas');
    console.log('4 porciones obtenidas');
}

function prepararBase() {
    console.log('Base para 1 pizza');
    console.log(`Dejar la base para 1 pizza reposar durante ${tiempoReposo}`);
    console.log('Base con forma circular obtenida');
}

function añadirIngredientes() {
    console.log('Añadido Salsa de tomate');
    console.log('Añadido Mozzarella');
    console.log('Añadido Pepperoni');
    console.log('Añadidas 4 Aceitunas Negras');
}

function hornearPizza() {
    console.log(`Horneando la pizza durante ${tiempoHorneado}`);
}

function pizzaLista() {
    console.log('Pizza lista');
    console.log('Pizza Entregada');
}

mezclarLevaduraConAgua();
añadirAceite();
añadirHarinaYSal();
amasarMasa();
dividirMasa();
prepararBase();
añadirIngredientes();
hornearPizza();
pizzaLista();