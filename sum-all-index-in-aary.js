// Initialize a counter variable starting at 0
var i = 0;

// Create an empty array to store user inputs
var my__array = [];

// Initialize a variable to hold the sum of all inputs
var sum = 0;

// Start a loop that runs while i is less than 3 (will run 3 times)
while (i < 3) {
    // Prompt the user for input and convert it to a Number
    var sun = Number(prompt("Insert your value:"));
    
    // Ensure the value is treated as a number (alternative conversion)
    sun = +sun;
    
    // Add the number to the end of our array
    my__array.push(sun);
    
    // Display the current state of the array
    console.log(my__array);
    
    // Ensure sum is treated as a number (redundant here as it's already 0)
    sum = +sum;
    
    // Add the current array element to the running total
    sum = sum + my__array[i];
    
    // Increment the counter
    i++;
}

// After the loop finishes, display the final sum
console.log(sum);
