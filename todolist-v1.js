var TodoList = [
    { Id:1 , Name: "Payam" },
    { Id:2 , Name: "Reza" },
    { Id:3 , Name: "Hassan" }
]
var T = TodoList.map(function(Id){
    return Id.Id
})
var R = TodoList.map(function(Id){
   return Id.Name
})
console.log(T +"\n"+ R);

var max = T[0]
for(let i = 0 ; i < T.length; i++) {
    if(T[i] > max) {
       max = T[i]
    }
}
console.log(max);

var UserInput = Number(prompt("If you want add a todo insert 1  and insert 2 for delete a todo and insert 3 and show resault:"));

var obj = {};
var DoyouWantAdd;
function Add(Id,Name) {
    while(true){

    Id = Number(prompt("Insert your Id:"));

    Name = prompt("Insert your name")

    obj = {Id , Name}
    if(Id == max+1 && Id != T){
    TodoList.push(obj);
    }else{
        console.log(`you must use one id after max id example: if last id is the ${max} you must use the ${max+1}!!`);
        
    }
    console.log(TodoList);
    
        DoyouWantAdd = Number(prompt("you want add another name: 1 ok , press any key for break"));

       if (DoyouWantAdd === 1){
        
        continue

       }  else {

        console.log(TodoList);
        
        break
       }

    }
}

function Remove(Id){
    Id = Number(prompt("Insert your Id target:"));
    TodoList.splice(Id-1,1)
    console.log(TodoList);
    
}


switch (UserInput) {
    case 1:
        Add()
        break;
    case 2:
        Remove()
    default:
        console.log(TodoList);
        
}
