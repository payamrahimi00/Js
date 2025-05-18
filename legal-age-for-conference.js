var GroupMemberAges = [74, 65, 69, 19, 86 ];
function check(age){
    return age > 18
}
var Y =  GroupMemberAges.every(check);
if (Y) {
    console.log("Conference started");
} else {
    console.log("Conference has banned");
}
