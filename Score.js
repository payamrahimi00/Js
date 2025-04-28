var average = prompt("Insert your average:", 0);
average = +average
var firsttage = "A";
var secondstage = "B";
var Thridstage = "C";

if (average > 20 || average !==Number ) {
    alert("Limit Equal 0 to 20 and use an number")
} else {
    ;
}


switch(average) {
    case 20:
    case 19:
    case 18:
        alert(firsttage)
        break
    case 17:
    case 16:
    case 15:
        alert(secondstage)
        break
    case 14:
    case 13:
    case 12:
        alert(Thridstage)
        break
    case 11:
    case 10:
    case  9:
    case  8:
    case  7:
    case  6:
    case  5:
    case  4:
    case  3:
    case  2:
    case  1:
    case  0:
        alert("Condational")
        break
    default:
        alert("User a true number")
}
