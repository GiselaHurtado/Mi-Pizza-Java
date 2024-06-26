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








// import { pizzas } from "./tastyPizzas.js";


// let customerPizza = { ingredients: [] };

// export async function makingPizza(pizzaSelected) {
//     const checked = checkIfExist(pizzaSelected);

//     if (checked) {
//         console.log(`Pizza ${pizzaSelected} en preparación`);
//         prepareDough();
//         addIngredients();
//         bakePizza();

//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(waitingBake());
//             }, 2000);
//         });

//         return promise;
//     }

//     if (!checked) return false;
// }

// function prepareDough() {
//     console.log("Tomando la masa");
//     console.log("Estirando la masa");
// }

// function addIngredients() {
//     customerPizza.ingredients.forEach((ingredient) => {
//         console.log(`Añadiendo ${ingredient}`);
//     });
// }

// function bakePizza() {
//     console.log("Horneando la pizza");
// }

// function waitingBake() {
//     console.log(`Pizza lista`);
// }

// function checkIfExist(pizzaSelected) {
//     let exist = false;
//     pizzas.forEach((pizza) => {
//         if (pizza.name === pizzaSelected) {
//             exist = true;
//             customerPizza = pizza;
//             return;
//         }
//     });

//     if (!exist) console.log("La pizza no Existe");

//     return exist;
// }

