const prompt = require("prompt-sync")();

const a = parseInt(prompt("Enter number 'a' : "));
const b = parseInt(prompt("Enter number 'b' : "));
const c = parseInt(prompt("Enter number 'c' : "));

const res1 = a + b * c;
const res2 = (a % b) + c;
const res3 = c + a / 3;
const res4 = a * b + c;

var list = [res1, res2, res3, res4];
console.log(list);
console.log(Math.max(...list));
console.log(Math.min(...list));
