var My_to_do_list = [
    {Name : "Morteza", Family : "Hardani", task : "Calculate  Tax " },
    {Name : "Payam ", Family : "Rahimi ", task : " Writing" },
    {Name : " Jafar", Family : "Saeedy", task : "Player" },
    {Name : "Farid", Family : "Sobhani", task : "workless" }
]
while (true) {
    
var Insert = prompt("Insert your name: type(exit) for Exit").toLocaleLowerCase();

var A = My_to_do_list.find(function (Item) {
  return Item.Name.trim().toLocaleLowerCase() == Insert

})
    if(A) {
        var C = prompt("Insert the new task:")
        A.task = C
        continue
    } else if(Insert == "exit" || Insert === null || Insert == "" ) {
        break
    } else {
        console.log("Use of the true name");
        continue
        
    }
}

console.log(My_to_do_list);

