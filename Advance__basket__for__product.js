/* =============================================
 *            PRODUCT DATABASE SETUP
 * ============================================= */
// Array containing ALL available products in our store
// Each product is an object with {name: string, price: number}
// Full list of products
var proDucts = [
    { name: "Ball", price: 17 },
    { name: "Flipflop", price: 9 },
    { name: "Toy", price: 25 },
    { name: "Notebook", price: 5 },
    { name: "Pencil", price: 1 },
    { name: "Eraser", price: 0.5 },
    { name: "Backpack", price: 40 },
    { name: "Water Bottle", price: 12 },
    { name: "Headphones", price: 30 },
    { name: "Phone Case", price: 15 },
    { name: "Sunglasses", price: 20 },
    { name: "Watch", price: 50 },
    { name: "T-Shirt", price: 15 },
    { name: "Jeans", price: 35 },
    { name: "Sneakers", price: 60 },
    { name: "Socks", price: 8 },
    { name: "Hat", price: 12 },
    { name: "Scarf", price: 10 },
    { name: "Gloves", price: 9 },
    { name: "Umbrella", price: 14 },
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 10 },
    { name: "Keyboard", price: 25 },
    { name: "Monitor", price: 150 },
    { name: "Desk Lamp", price: 22 },
    { name: "Chair", price: 75 },
    { name: "Desk", price: 120 },
    { name: "Bookshelf", price: 65 },
    { name: "Pillow", price: 18 },
    { name: "Blanket", price: 25 },
    { name: "Toothbrush", price: 3 },
    { name: "Toothpaste", price: 4 },
    { name: "Shampoo", price: 7 },
    { name: "Soap", price: 2 },
    { name: "Towel", price: 12 },
    { name: "Mirror", price: 20 },
    { name: "Hair Dryer", price: 35 },
    { name: "Razor", price: 8 },
    { name: "Comb", price: 2 },
    { name: "Perfume", price: 45 },
    { name: "Deodorant", price: 5 },
    { name: "Makeup Kit", price: 30 },
    { name: "Lipstick", price: 12 },
    { name: "Nail Polish", price: 6 },
    { name: "Wallet", price: 25 },
    { name: "Belt", price: 18 },
    { name: "Handbag", price: 55 },
    { name: "Keychain", price: 5 },
    { name: "Flashlight", price: 10 },
    { name: "Batteries", price: 7 },
    { name: "Screwdriver Set", price: 15 },
    { name: "Hammer", price: 12 },
    { name: "Wrench", price: 8 },
    { name: "Pliers", price: 9 },
    { name: "Tape Measure", price: 6 },
    { name: "Drill", price: 50 },
    { name: "Paintbrush", price: 4 },
    { name: "Paint Roller", price: 5 },
    { name: "Wall Clock", price: 20 },
    { name: "Calendar", price: 10 },
    { name: "Photo Frame", price: 8 },
    { name: "Candle", price: 6 },
    { name: "Vase", price: 15 },
    { name: "Plant Pot", price: 12 },
    { name: "Broom", price: 10 },
    { name: "Mop", price: 15 },
    { name: "Trash Can", price: 20 },
    { name: "Laundry Basket", price: 12 },
    { name: "Hangers", price: 5 },
    { name: "Iron", price: 25 },
    { name: "Vacuum Cleaner", price: 100 },
    { name: "Dish Soap", price: 3 },
    { name: "Sponge", price: 2 },
    { name: "Trash Bags", price: 8 },
    { name: "Paper Towels", price: 5 },
    { name: "Bleach", price: 4 },
    { name: "Detergent", price: 10 },
    { name: "Mug", price: 8 },
    { name: "Plate", price: 6 },
    { name: "Bowl", price: 5 },
    { name: "Cutlery Set", price: 15 },
    { name: "Glass", price: 4 },
    { name: "Wine Glass", price: 7 },
    { name: "Frying Pan", price: 25 },
    { name: "Pot", price: 20 },
    { name: "Spatula", price: 5 },
    { name: "Ladle", price: 4 },
    { name: "Knife Set", price: 40 },
    { name: "Cutting Board", price: 12 },
    { name: "Mixing Bowl", price: 10 },
    { name: "Baking Tray", price: 8 },
    { name: "Oven Mitts", price: 7 },
    { name: "Dish Towel", price: 5 },
    { name: "Blender", price: 35 },
    { name: "Toaster", price: 25 },
    { name: "Microwave", price: 80 },
    { name: "Coffee Maker", price: 50 },
    { name: "Kettle", price: 20 },
    { name: "Food Container", price: 10 },
    { name: "Lunch Box", price: 12 },
    { name: "Thermos", price: 18 },
    { name: "Yoga Mat", price: 20 },
    { name: "Dumbbells", price: 30 },
    { name: "Jump Rope", price: 8 },
    { name: "Resistance Bands", price: 12 },
    { name: "Tennis Racket", price: 45 },
    { name: "Basketball", price: 25 }
];

/* =============================================
 *         SHOPPING BASKET INITIALIZATION
 * ============================================= */
// Empty array that will hold user's selected products
var baSket = [];  // Starts empty: []
var tax = 1.5 //tax for product price more  15$
var sum = 0;
var i = 0;
/* =============================================
 *        PRODUCT ADDITION PROCESS (LOOP)
 * ============================================= */
// Infinite loop runs until user decides to exit
while (true) {
    // Show input dialog asking for product name
    var userInput = prompt("Insert your product (or leave empty to finish):");
    
    // EXIT CONDITION CHECK:
    // - If user clicked Cancel (null) 
    // - OR entered empty string (after trimming spaces)
    if (userInput === null || userInput.trim() === "") {
        console.log("Finished adding products.");
        break;  // Exit the infinite loop
    }

    /* =========================================
     *          PRODUCT SEARCH LOGIC
     * ========================================= */
    // Search products array for matching name (case-insensitive)
    var product = proDucts.find(item => 
        item.name.toLowerCase() === userInput.trim().toLowerCase()
    );

    // If product NOT found (!product = true)
    if (!product) {
        console.log("Product not found. Try again.");
        continue;  // Skip to next loop iteration
    }
    
    /* =========================================
     *       ADD TO BASKET & CONFIRMATION
     * ========================================= */
    // Add product copy to basket array
    if(product.price > 15) {
        baSket.push({ name: product.name, price: product.price + tax });     
    } else{
        baSket.push({ name: product.name, price: product.price });
    }
 
    
    
    // Print success message with template literal
    console.log(`${product.name} added to basket for $${product.price}`);
   
}

/* =============================================
 *          DISPLAY FINAL BASKET
 * ============================================= */
console.log("\nYour basket:");  // \n adds blank line before

// Show each item with its index position
baSket.forEach((item, index) => 
    console.log(`${index}: ${item.name} - $${item.price}`)
);

/* =============================================
 *        BASKET MANAGEMENT FUNCTIONS
 * ============================================= */

/**
 * Removes item from basket by index position
 * @param {number} index - Position of item to remove
 */
function removeItem(index) {
    // Validate index is within basket bounds
    if (index >= 0 && index < baSket.length) {
        baSket.splice(index, 1);  // Remove 1 item at index
        console.log("Item removed successfully!");
    } else {
        console.log("Invalid index. No item removed.");
    }
}

/**
 * Adds new product to basket by name search
 */
function addItem() {
    var productName = prompt("Enter product name to add:");
    
    // Case-insensitive search in products array
    var product = proDucts.find(p => 
        p.name.toLowerCase() === productName.trim().toLowerCase()
    );
    
    if (product) {
        baSket.push(product);  // Add found product
        console.log(`${product.name} added to basket.`);
    } else {
        console.log("Product not found.");
    }
}

/**
 * Displays current basket contents with indexes
 */
function displayBasket() {
    console.log("\nCurrent basket:");
    baSket.forEach((item, index) => 
        console.log(`${index}: ${item.name} - $${item.price}`)
    );
}

/* =============================================
 *           USER ACTION INTERFACE
 * ============================================= */
// Ask user what they want to do
var T = baSket.map(function(Price){
    return Price.price
})
var action = Number(prompt(
    "1: Delete item | 2: Add item | 3: View basket | Any other key: Exit"
));

// Process user choice
switch (action) {
    case 1:  // Remove item
        var indexToRemove = Number(prompt("Enter the index of the item to remove:"));
        removeItem(indexToRemove);
        break;
        
    case 2:  // Add item
        addItem();
        break;
        
    case 3:  // View basket
        displayBasket();
        break;
        
    default:  // Exit program
        console.log("Exiting...");
        while (i < T.length) {
            sum = sum + T[i]
            i++
        }
        console.log(sum,"Sum basket + tax");
        
}
