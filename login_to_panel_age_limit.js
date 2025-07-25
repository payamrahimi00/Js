// Commit 1: Initialize age input by converting prompt result to Number
// Reason: We need numeric input for age verification
var Age = Number(prompt("Insert your age:"));

// Commit 2: Validate if input is a real number
// Reason: NaN check prevents non-numeric inputs (like text) from proceeding
if (!isNaN(Age)) {
  
  // Commit 3: Check if user is 18+ 
  // Reason: Core business rule for access control
  if (Age >= 18) {
    
    // Commit 4: Grant access to adults
    // Reason: Successful case handling
    console.log("Welcome to panel");
  
  // Commit 5: Handle underage users  
  // Reason: Compliance with age restrictions
  } else {
    console.log("User has banned.");
  }

// Commit 6: Handle invalid inputs
// Reason: Fail clearly when input isn't a number
} else {
  console.log("Error");
}
