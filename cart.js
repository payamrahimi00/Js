var products = [
    {
        name: "BMW",
        price: 25
    },
    {
        name: "AUDI",
        price: 34
    },
    {
        name: "Merceds",
        price: 61
    }
];

var exitCommand = "exit";
var cart = prompt("Insert the product name (type 'exit' to end):").trim().toLowerCase();
var total = 0;

while (cart !== exitCommand) {
    var product = products.find(p => p.name.toLowerCase() === cart);
    
    if (product) {
        total += product.price;
        console.log(`Added ${product.name} ($${product.price}) to cart. Current total: $${total}`);
    } else {
        console.log("Product not found!");
    }
    
    cart = prompt("Insert the next product name (type 'exit' to end):").trim().toLowerCase();
}
