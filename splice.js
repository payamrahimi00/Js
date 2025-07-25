// Initialize an array with 7 numeric elements
var my_arry = [65, 2, 35, 75, 98, 14, 34];

// Modify the array using splice():
// - Start at index 2 (value 35)
// - Remove 4 elements (35, 75, 98, 14)
// - Insert new elements (25, 13, 48) at the same position
my_arry.splice(2, 4, 25, 13, 48);

// Print the modified array to console
// Expected output: [65, 2, 25, 13, 48, 34]
console.log(my_arry);
