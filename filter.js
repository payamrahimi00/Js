var ages = [20,17,36,46,95,36,14,35,23,27,29,28,5]
var check = ages.filter(function(age){
    return age <= 18
})
console.log("Teenager",check);
