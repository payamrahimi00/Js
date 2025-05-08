var my__arr = [14, 21, 13, 56, 49, 21, 75];

// Add "push" to the end of the array
my__arr.push("push"); 
// Now: [14, 21, 13, 56, 49, 21, 75, "push"]

// Remove the last element ("push") from the array
my__arr.pop(); 
// Now: [14, 21, 13, 56, 49, 21, 75] (back to original)

// Add "Payam" to the beginning of the array
my__arr.unshift("Payam"); 
// Now: ["Payam", 14, 21, 13, 56, 49, 21, 75]

// Remove the first element ("Payam") from the array
my__arr.shift(); 
// Now: [14, 21, 13, 56, 49, 21, 75] (back to original)

// Print the final array
console.log(my__arr); 
// Output: [14, 21, 13, 56, 49, 21, 75]
