var i = 0; 
var my__array = [];
var sum = 0;
while (i < 3) {
    var sun =  Number(prompt("Insert your value:"));
    sun = +sun;
    my__array.push(sun)
    console.log(my__array)
    sum = +sum;
    sum = sum + my__array[i]
    i++
}
console.log(sum / my__array.length)
