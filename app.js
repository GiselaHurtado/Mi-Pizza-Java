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

