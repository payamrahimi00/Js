var userInput = prompt("Insert your text:");
var i = 0;
var arry = [];
while (i < userInput.length) {
    arry.push(userInput[i])
    i++
}

var arry2 = [...arry];  // Create a proper copy
arry2 = arry2.reverse();
console.log(arry2);

if (arry.toString() == arry2.toString()) {  // Better comparison
    console.log("It's palindrome!");
} else {
    console.log('It\'s a normal word');
}

console.log('Default word\n', arry);
