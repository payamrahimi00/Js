var First = Number(prompt("Insert your score:"));
//console.log(typeof First); 

if(First <= 20 && First != NaN) {
switch (First) {
    case 20:
    case 19:
    case 18:
        console.log("A")
        break;
     case 17:
     case 16:
     case 15:  
        console.log("B")
        break;
    case 14:
    case 13:
    case 12:  
        console.log("C")
        break;
    default:
        console.log("D")
        break;
}
}
else {
    console.log("Please use of true score!!")
}
