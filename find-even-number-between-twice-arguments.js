var A = Number(prompt("Insert first number:"));
var B = Number(prompt("Insert second number:")) -1;
var C = (A <= B)
while (C) {
    A >= B ? C = false : console.log();
    A % 2 == 0 ? console.log(A) : console.log("Even number");
    A++
}
console.log(((A -1) /2),"Count of even")
