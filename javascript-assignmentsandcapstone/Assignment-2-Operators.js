// Assignment 2: Calculate a Bill with Tip

let bill = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let tip = bill * tipPercentage / 100;
let total = bill;

total += tip;

console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);