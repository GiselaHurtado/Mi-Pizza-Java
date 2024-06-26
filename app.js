import prompt from 'prompt-sync';
import { pizza as pizzaOptions } from "./modules/pizza.js";
import { makingPizza } from "./modules/makingPizza.js";
import { deliverPizza } from "./modules/deliverPizza.js";

const pizzaPrompt = prompt();
const pizzaName = pizzaPrompt('Escoge el sabor de tu Pizza: ');
const option = pizzaOptions.find(p => p.name === pizzaName);

if (option) {
  makingPizza(option);
  deliverPizza();
} else {
  console.log('Sabor de pizza no encontrado.');
}







/* const prompt = require('prompt-sync') ({ sigint: true}); */

// import prompt from 'prompt-sync'
// import { pizza } from "./modules/pizza.js"
// import { makingPizza } from "./modules/makingPizza.js"
// import { deliverPizza } from "./modules/deliverPizza.js"

// const pizza = prompt()('Escoge el sabor de tu Pizza: ')
// const option = pizza.find(function(p){
//     return p.nombre === pizza
// }) 

// makingPizza(option)
// deliverPizza() ------------



// function app() {
//     const prompt = require("promptSync");
//     const pizzaName = prompt("Y tu pizza es ... (margarita): ");

//     let result = makingPizza(pizzaName);

//     result.then((resolve) => {
//         if (resolve === undefined) deliverPizza();
//     });

// }

// app();

