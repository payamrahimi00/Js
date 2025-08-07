var my__Databes = [
  { 
    Id: 1, 
    username: "admin", 
    Password: "kL8#pQ2$mN",  // Random 10-char mix
    role: "admin", 
    lastLogin: "2025-08-08T10:00:00Z"
  },
  { 
    Id: 2, 
    username: "user1", 
    Password: "5tG!9fR@3z",  // Random 10-char mix
    role: "user", 
    lastLogin: "2025-08-07T15:22:00Z"
  },
  { 
    Id: 3, 
    username: "john", 
    Password: "vB7%kY4*pX",  // Random 10-char mix
    role: "editor", 
    lastLogin: "2025-08-06T09:15:00Z"
  },
  { 
    Id: 4, 
    username: "sara", 
    Password: "qW6&jU1^dC",  // Random 10-char mix
    role: "guest", 
    lastLogin: null
  },
  { 
    Id: 5, 
    username: "mike", 
    Password: "aZ9@nM5#rT",  // Random 10-char mix
    role: "user", 
    lastLogin: "2025-08-05T14:30:00Z"
  },
  { 
    Id: 6, 
    username: "lisa", 
    Password: "eP3$oL8!bK",  // Random 10-char mix
    role: "admin", 
    lastLogin: "2025-08-04T11:45:00Z"
  },
  { 
    Id: 7, 
    username: "dave", 
    Password: "yH2*mQ7%cF",  // Random 10-char mix
    role: "user", 
    lastLogin: "2025-08-03T16:20:00Z"
  },
  { 
    Id: 8, 
    username: "emma", 
    Password: "rD4^jI9@nV",  // Random 10-char mix
    role: "editor", 
    lastLogin: "2025-08-02T13:10:00Z"
  },
  { 
    Id: 9, 
    username: "root", 
    Password: "wX5!sK3#pL",  // Random 10-char mix
    role: "superadmin", 
    lastLogin: "2025-08-01T18:00:00Z"
  },
  { 
    Id: 10, 
    username: "test", 
    Password: "uN8$gB6&mY",  // Random 10-char mix
    role: "guest", 
    lastLogin: null
  }
];
var Find;
var A; 
while(true){
Find = prompt("Insert the username:")
A = my__Databes.find(user => {
 if(Find === user.username) {
   return user.Password
  
 }
})
if(A === undefined){
  console.log("Please use the true name");
  continue
}else {
  console.log(A.Password);
  break
}
}
