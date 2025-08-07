var Substraction = "sub";
var Addition = "add";
var Multiplication = "multi";
var Division = "div";
var A;
var B;
var C;
while (true) {
A = Number(prompt("Insert first number:"));
B = Number(prompt("Insert Second number:"));
C = prompt("Insert the mission:(add = + ) - = sub ) * = multi ) / = div").toLocaleLowerCase();
Math.abs(A,B)

  if( C === Substraction ) {
    console.log( A - B );
    break
  } else if( C === Addition ) {
    console.log( A + B );
    break
  } else if( C === Multiplication ) {
    console.log( A * B );
    break
  }  else if( C === Division && B != 0) {
    console.log( A / B );
    break
  } else {
     console.log("Use the true mission number can't divied by zero");
     continue
     
  }


}
