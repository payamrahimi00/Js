var Second = Number(prompt("Insert your second:"));

var Minute = Number(prompt("Insert your minute:"));

if(Second <= 60 && Minute <= 60){

var Timer = setInterval (function () {
  if(Second == 0) {
    Second = 60
    Minute-- 
  }
  
  if (Minute == -1) {
    Minute += 1
    Second = 0
    
    clearInterval(Timer)
    console.log(Minute,":",Second);
    console.log("Game over!");
  } else{
  console.log(Minute,":",Second)
 };
  Second--
  
},1000);

} else {
  console.log("Just use the numbers lessthan 60");
  
}
