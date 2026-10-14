// Capstone Project: Product Inventory and Analytics Dashboard

console.log("--- Initializing Inventory System ---");

// Starting inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details from the user
let productName = prompt("Enter the new product name:");
let productPrice = Number(prompt("Enter the product price:"));

// Validate user input
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details. No product was added.");
} else {
    productName = productName.trim();

    // Search for an existing product
    let productExists = false;

    for (const product of inventory) {
        if (product.name.toLowerCase() === productName.toLowerCase()) {
            productExists = true;
            break;
        }
    }

    if (productExists) {
        console.log("This product already exists in the inventory.");
    } else {
        inventory.push({
            name: productName,
            price: productPrice
        });

        console.log(
            `Added product: ${productName} ($${productPrice})`
        );
    }
}

// Assign a category based on the price
function getCategory(price) {
    if (price <= 50) {
        return "Budget";
    } else if (price <= 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// Use switch to display a category badge
function showCategory(category) {
    switch (category) {
        case "Budget":
            return "[Budget]";
        case "Standard":
            return "[Standard]";
        case "Premium":
            return "[Premium]";
        default:
            return "[Unknown]";
    }
}

// Calculate total inventory value using an arrow function
const calculateTotal = (items) => {
    let total = 0;

    items.forEach((item) => {
        total += item.price;
    });

    return total;
};

// Apply a discount and tax using custom parameters
function calculateFinalPrice(price, discount = 0, tax = 0) {
    const discountedPrice = price - (price * discount / 100);
    return discountedPrice + (discountedPrice * tax / 100);
}

// Print the complete inventory
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {
    const category = getCategory(product.price);
    const badge = showCategory(category);

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${badge}`
    );
});

// Display inventory analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log(`Total Inventory Value: $${totalValue}`);

// Find affordable products
const affordableProducts = inventory.filter((product) => {
    return product.price < 200;
});

const affordableNames = affordableProducts.map((product) => {
    return product.name;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableNames)
);

// Create a formatted inventory report
const report = inventory.map((product) => {
    return `${product.name.toUpperCase()}: $${product.price}`;
});

console.log("Formatted Report List:", JSON.stringify(report));

// Demonstrate custom discount and tax parameters
const samplePrice = calculateFinalPrice(150, 10, 5);

console.log(
    `Example price after 10% discount and 5% tax: $${samplePrice.toFixed(2)}`
);