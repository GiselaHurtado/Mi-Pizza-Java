"use strict";

const promptSync = require("prompt-sync");
const prompt = promptSync();


let name = prompt("Enter your Name : ");
console.log('Hello ${name}');