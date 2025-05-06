let number = prompt("Insert your number:");
let sum = 0;
let temp = Math.abs(number); // Reverse negative number

while (temp > 0) {
    sum += temp % 10; // sum with last digit 
    temp = Math.floor(temp / 10);  //Delete last digit
}

console.log("sum of numbers:", sum);
