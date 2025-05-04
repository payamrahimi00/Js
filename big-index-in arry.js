let numbers = [86,121,36,56,15,65,86,322,6,65,1,56,14,45,61];
var max = numbers[0]
for(let i = 0 ; i < numbers.length; i++) {
    if(numbers[i] > max) {
       max = numbers[i]
       console.log(max);
    }
    
}
// 
// 
// 
// 
let numbers2 = [86, 121, 36, 56, 15, 65, 86, 322, 6, 65, 1, 56, 14, 45, 61];
var max = numbers[0];  // Start with first element (86)

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];  // Update max silently
    }
}

console.log(max);  // Print ONLY the final result (322)
