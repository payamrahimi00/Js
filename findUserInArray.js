var my__USers = [
    {name : "Payam", Family : "Rahimi", Age : 20},
    {name : "Danyal", Family : "Keymaram", Age : 21},
    {name : "pedram", Family : "Mortezavi", Age : 39}
]
var H = my__USers.some(function(user){
        return user.name == "Payam"
});
console.log(H)
