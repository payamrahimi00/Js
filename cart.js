var products = [
    {
        name : "BMW",
        Price : 25
    },

    {
        name : "AUDI",
        Price : 34
    },

    {
        name : "Merceds",
        Price : 61
    },
];
var cart = prompt("Insert The product name: INSERT EXIT FOR END").trim();
var total = 0;
while(cart !== "EXIT") {
    var A = products.find( p => p.name ===  cart)
    if(A) {
        total += A.Price;
    } else {
        console.log("Product not found!");
    }
    cart = prompt("Insert the next product name : INSERT EXIT FOR END ").trim();
}
console.log("SUM", total);
