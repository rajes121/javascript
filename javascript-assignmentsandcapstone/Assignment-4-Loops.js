// Assignment 4: For, While, and Do...While Loops

// Print the multiplication table of 5
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Find the first number greater than 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");

let number = 11;

while (number > 10) {
    if (number % 6 === 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}

// Use continue in a do...while loop
console.log("\n-- Do...While with Continue --");

let count = 0;

do {
    count++;

    if (count === 2 || count === 4) {
        continue;
    }

    console.log("Number:", count);
} while (count < 5);