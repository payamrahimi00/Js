// Ask the user to enter a value
let userInput = prompt("Enter any value (e.g. 0, '', 'hello', false, null, undefined):");

// If the user presses Cancel, prompt returns null (a falsy value)
console.log("Raw user input:", userInput);

// Step 1: Try to auto-convert value to correct type (Number, Boolean, etc.)
let convertedValue;

// Check for null (user clicked Cancel)
if (userInput === null) {
  convertedValue = null;
} else if (userInput.toLowerCase() === "false") {
  convertedValue = false;
} else if (userInput.toLowerCase() === "true") {
  convertedValue = true;
} else if (userInput.toLowerCase() === "undefined") {
  convertedValue = undefined;
} else if (userInput.toLowerCase() === "null") {
  convertedValue = null;
} else if (!isNaN(Number(userInput))) {
  // If it's a number like "0", "42", "-5", etc.
  convertedValue = Number(userInput);
} else {
  // Otherwise keep as string
  convertedValue = userInput;
}

// Show the converted value and its type
console.log("Converted value:", convertedValue);
console.log("Type of value:", typeof convertedValue);

// Step 2: Check if it's truthy or falsy
if (convertedValue) {
  console.log("✅ This value is TRUTHY");
} else {
  console.log("❌ This value is FALSY");
}

// Step 3: Show Boolean conversion explicitly
console.log("Boolean(convertedValue):", Boolean(convertedValue));

// Step 4: Explain common falsy values
console.log("\nCommon falsy values in JS are:");
console.log("- false");
console.log("- 0");
console.log("- -0");
console.log("- 0n");
console.log("- \"\" (empty string)");
console.log("- null");
console.log("- undefined");
console.log("- NaN");
