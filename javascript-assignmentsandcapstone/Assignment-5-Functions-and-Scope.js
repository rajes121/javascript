// Assignment 5: Functions and Scope

// Regular function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

// Demonstrate block scope
try {
    if (true) {
        let blockVar = "Inside the block";
        console.log(blockVar);
    }

    // This variable is not accessible outside the block
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}