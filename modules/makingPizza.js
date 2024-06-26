export function makingPizza(pizza) {
    console.log(`Pizza ${pizza.name} en preparación`);
    amasar()
    incluirIngredientes(pizza)
    hornear()
}

function amasar() {
    console.log(`Tomando la masa`);
    console.log(`Estirando la masa`);    
}

function incluirIngredientes(pizza) {
    pizza.ingredients.forEach(element => {
        console.log(`Añadiendo ${element}`);
    })
}

function hornear() {
    console.log(`Horneando la pizza`);
}
