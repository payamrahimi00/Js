// ======= PRACTICE 1: var hoisting =======
console.log("P1:", a); // Expect: undefined
var a = 10;
console.log("P1 after:", a); // Expect: 10


// ======= PRACTICE 2: let hoisting (TDZ) =======
try {
    console.log("P2:", b); // Expect: ReferenceError
} catch (e) {
    console.log("P2 error:", e.name);
}
let b = 20;
console.log("P2 after:", b); // Expect: 20


// ======= PRACTICE 3: const hoisting (TDZ) =======
try {
    console.log("P3:", c); // Expect: ReferenceError
} catch (e) {
    console.log("P3 error:", e.name);
}
const c = 30;
console.log("P3 after:", c); // Expect: 30


// ======= PRACTICE 4: function declaration hoisting =======
sayHi(); // Expect: "Hi there!"
function sayHi() {
    console.log("Hi there!");
}


// ======= PRACTICE 5: function expression with var =======
try {
    greet(); // Expect: TypeError (greet is undefined)
} catch (e) {
    console.log("P5 error:", e.name);
}
var greet = function() {
    console.log("Hello!");
};
greet(); // Expect: "Hello!"


// ======= PRACTICE 6: function expression with let =======
try {
    greet2(); // Expect: ReferenceError (TDZ)
} catch (e) {
    console.log("P6 error:", e.name);
}
let greet2 = function() {
    console.log("Hello again!");
};
greet2(); // Expect: "Hello again!"


// ======= PRACTICE 7: class hoisting =======
try {
    let person = new Person(); // Expect: ReferenceError (TDZ)
} catch (e) {
    console.log("P7 error:", e.name);
}
class Person {
    constructor() {
        console.log("Person created!");
    }
}
let p = new Person(); // Expect: "Person created!"


// ======= PRACTICE 8: var inside function =======
function testVar() {
    console.log("P8:", x); // Expect: undefined
    var x = 100;
    console.log("P8 after:", x); // Expect: 100
}
testVar();


// ======= PRACTICE 9: let inside block =======
{
    try {
        console.log("P9:", y); // Expect: ReferenceError (TDZ)
    } catch (e) {
        console.log("P9 error:", e.name);
    }
    let y = 200;
    console.log("P9 after:", y); // Expect: 200
}


// ======= PRACTICE 10: order with var and function =======
console.log("P10:", typeof mixed); // Expect: "function" because function wins over var
var mixed = 500;
function mixed() { console.log("Mixed function"); }
console.log("P10 after:", typeof mixed); // Expect: "number"


// ======= PRACTICE 11: imports (ESM only) =======
// Run only in ES modules
/*
import { something } from './module.js';
console.log(something); // Hoisted to top, available after load
*/


// ======= PRACTICE 12: tricky scope =======
var outer = "global";

function scopeTest() {
    console.log("P12:", outer); // Expect: undefined (var hoisted inside function)
    var outer = "local";
    console.log("P12 after:", outer); // Expect: "local"
}
scopeTest();
