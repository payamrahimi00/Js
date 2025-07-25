/**
 * DIGIT SUM CALCULATOR
 * This program calculates the sum of all digits in a number.
 * Example: Input '123' → Output '6' (1+2+3)
 */

// Step 1: Get user input (initially as string)
let number = prompt("Insert your number:");

// Convert to number type (in case user enters text)
number = Number(number);

// Initialize sum variable to accumulate the total
let sum = 0;

// Handle negative numbers by converting to positive
// (We only care about digit values, not the sign)
let temp = Math.abs(number);

// PROCESS EACH DIGIT:
while (temp > 0) {
    // A) EXTRACT LAST DIGIT:
    // Using modulo 10 gives the remainder (last digit)
    // Example: 123 % 10 → returns 3
    let lastDigit = temp % 10;
    
    // B) ADD TO RUNNING TOTAL:
    sum += lastDigit;
    
    // C) REMOVE LAST DIGIT:
    // Dividing by 10 and flooring removes the decimal
    // Example: Math.floor(123 / 10) → 12
    temp = Math.floor(temp / 10);
    
    // Debug log (optional):
    console.log(`Digit: ${lastDigit} | Temp: ${temp} | Sum: ${sum}`);
}

// FINAL RESULT:
console.log("Sum of digits:", sum);
