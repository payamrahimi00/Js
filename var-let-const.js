console.log("=== 1. Scope differences ===");
if (true) {
    var vScope = "var scope";
    let lScope = "let scope";
    const cScope = "const scope";
}
console.log(vScope); // ✅ var is function/global scoped
try { console.log(lScope); } catch(e) { console.log(e.name); } // ReferenceError
try { console.log(cScope); } catch(e) { console.log(e.name); } // ReferenceError


console.log("\n=== 2. Hoisting behavior ===");
console.log("var before:", vHoist); // undefined
var vHoist = 1;
try { console.log(lHoist); } catch(e) { console.log("let before:", e.name); }
let lHoist = 2;
try { console.log(cHoist); } catch(e) { console.log("const before:", e.name); }
const cHoist = 3;
console.log("var after:", vHoist, "let after:", lHoist, "const after:", cHoist);


console.log("\n=== 3. Redeclaration in same scope ===");
var x = 5;
var x = 10; // ✅ allowed
console.log("var redeclare:", x);
let y = 5;
try { let y = 10; } catch(e) { console.log("let redeclare:", e.name); }
const z = 5;
try { const z = 10; } catch(e) { console.log("const redeclare:", e.name); }


console.log("\n=== 4. Reassignment ===");
var rv = 1; rv = 2; console.log("var reassign:", rv);
let rl = 1; rl = 2; console.log("let reassign:", rl);
const rc = 1;
try { rc = 2; } catch(e) { console.log("const reassign:", e.name); }


console.log("\n=== 5. const with objects/arrays ===");
const obj = { a: 1 };
obj.a = 99; // ✅ allowed
console.log("const object modified:", obj);
try { obj = { a: 2 }; } catch(e) { console.log("const object reassigned:", e.name); }

const arr = [1,2];
arr.push(3); // ✅ allowed
console.log("const array modified:", arr);
try { arr = [4,5]; } catch(e) { console.log("const array reassigned:", e.name); }


console.log("\n=== 6. Global object binding ===");
var gv = "I am var";
let gl = "I am let";
const gc = "I am const";
console.log("window.gv:", typeof window !== "undefined" ? window.gv : "no window");
console.log("window.gl:", typeof window !== "undefined" ? window.gl : "no window");
console.log("window.gc:", typeof window !== "undefined" ? window.gc : "no window");


console.log("\n=== 7. Function scope test for var ===");
function varTest() {
    if (true) {
        var inside = "inside var";
    }
    console.log(inside); // ✅ still accessible
}
varTest();


console.log("\n=== 8. Block scope test for let/const ===");
{
    let insideLet = "inside let";
    const insideConst = "inside const";
    console.log(insideLet, insideConst); // ✅ inside block
}
try { console.log(insideLet); } catch(e) { console.log("outside let:", e.name); }
try { console.log(insideConst); } catch(e) { console.log("outside const:", e.name); }
