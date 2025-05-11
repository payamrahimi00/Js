var default_User = [
    { name: "Poya", Family: "Rahimi", age: 20, _Email: "Example-one@email.com" },
    { name: "Portae", Family: "Hardani", age: 19, _Email: "Example-second@email.com" },
    { name: "Danyal", Family: "Rahmani", age: 31, _Email: "Example-third@email.com" }
];

var result = default_User.slice(); // Copy default users
var i = 0;

while (i < 3) {
    var SaveData = {};

    // Get and validate name
    while (true) {
        SaveData.name = prompt("Insert your name:");
        if (SaveData.name && SaveData.name.length >= 3 && SaveData.name.length <= 10) break;
        alert("Name must be between 3 and 10 characters!");
    }

    // Get and validate family
    while (true) {
        SaveData.Family = prompt("Insert your family:");
        if (SaveData.Family && SaveData.Family.length >= 3 && SaveData.Family.length <= 15) break;
        alert("Family must be between 3 and 15 characters!");
    }

    // Get and validate age
    while (true) {
        SaveData.age = Number(prompt("Insert your age:"));
        if (!isNaN(SaveData.age) && SaveData.age >= 100 && SaveData.age <= 999) break;
        alert("Age must be a 3-digit number (100-999)!");
    }

    // Get email (no validation here, optional)
    SaveData._Email = prompt("Insert your email address:");

    // Add validated object to result
    result.push(SaveData);
    i++;
}

// Show final result
console.log(result);
