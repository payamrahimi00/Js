var picture = Boolean;
var i = 0;
var convert;
var LoginTime = setInterval(() => {
    console.log(i);

    if(i == 5){
       convert = prompt("Add:");

       if(convert){

        picture = true;

        console.log("Picture added;",picture);
        
       } else{

        picture = false;

        console.log("Picture no choise",picture);
        
       }
       clearInterval(LoginTime)
    }

    i++
}, 1000);
