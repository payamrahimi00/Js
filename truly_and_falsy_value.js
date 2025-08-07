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
///////////////////////////////////////////
///////////////////////////////////////
// Let's define different types of values
let a = 0;              // falsy
let b = "hello";        // truthy (non-empty string)
let c = "";             // falsy (empty string)
let d = null;           // falsy
let e = undefined;      // falsy
let f = NaN;            // falsy
let g = 42;             // truthy (non-zero number)
let h = {};             // truthy (empty object)
let i = [];             // truthy (empty array)

// Let's test them using if conditions

if (a) {
  console.log("a is truthy");
} else {
  console.log("a is falsy"); // this will run
}

if (b) {
  console.log("b is truthy"); // this will run
} else {
  console.log("b is falsy");
}

if (c) {
  console.log("c is truthy");
} else {
  console.log("c is falsy"); // this will run
}

if (d) {
  console.log("d is truthy");
} else {
  console.log("d is falsy"); // this will run
}

if (e) {
  console.log("e is truthy");
} else {
  console.log("e is falsy"); // this will run
}

if (f) {
  console.log("f is truthy");
} else {
  console.log("f is falsy"); // this will run
}

if (g) {
  console.log("g is truthy"); // this will run
} else {
  console.log("g is falsy");
}

if (h) {
  console.log("h is truthy"); // this will run
} else {
  console.log("h is falsy");
}

if (i) {
  console.log("i is truthy"); // this will run
} else {
  console.log("i is falsy");
}

// You can also test directly in console:
console.log(Boolean(""));      // false
console.log(Boolean("text"));  // true
console.log(Boolean(0));       // false
console.log(Boolean(1));       // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null));     // false
console.log(Boolean(NaN));      // false

// Example in a function
function checkLogin(username) {
  if (username) {
    console.log("Welcome, " + username);
  } else {
    console.log("Please enter your username"); // this will run if username is falsy
  }
}

checkLogin("");      // Empty string → falsy → will ask for username
checkLogin("Ali");   // Non-empty → truthy → will welcome the user
