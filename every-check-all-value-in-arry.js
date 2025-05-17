var ages = [36, 41, 72, 65];

function checkAge(age) {

    return age !==73;

}

var u = ages.every(checkAge)
console.log(u);
