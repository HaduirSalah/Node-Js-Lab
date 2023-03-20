// Call Using Pattern 1

var greeting = require('./Birthday');
var option1=greeting.getGreeting('Hadeer', 1999, 4, 3);
console.log(option1); // Output: "Hello Hadeer, your age now is: 35"

console.log("---------------------------------------------------------");

var option2=greeting.getGreeting(123, '1990', 2, 14)
console.log(option2); // Throws an error: "Invalid input: name must be a string, birth year, month, and day must be numbers"

console.log("---------------------------------------------------------");
var option3=greeting.getGreeting('Mary', 2023, 1, 1)
console.log(option3); // Throws an error: "Invalid birth year: please enter a valid birth year between 1900 and 2022" 


console.log("---------------------------------------------------------");
var option4=greeting.getGreeting('Hadeer', 1990, 'Salah', 30);
console.log(option4); // Throws an error: "Invalid input: name must be a string, birth year, month, and day must be numbers"

// // ------------------------------------------ Call To Another Way By Pattern 2 ----------------------------------------
// // Using By Pattern 2
// var option1=greeting('Hadeer', 1987, 3, 15);
// console.log(option1); // Output: "Hello Hadeer, your age now is: 35"

// console.log("---------------------------------------------------------");

// var option2=greeting(123, '1990', 2, 14)
// console.log(option2); // Throws an error: "Invalid input: name must be a string, birth year, month, and day must be numbers"

// console.log("---------------------------------------------------------");
// var option3=greeting('Mary', 2023, 1, 1)
// console.log(option3); // Throws an error: "Invalid birth year: please enter a valid birth year between 1900 and 2022" 


// console.log("---------------------------------------------------------");
// var option4=greeting('Hadeer', 1990, 'Salah', 30);
// console.log(option4); // Throws an error: "Invalid input: name must be a string, birth year, month, and day must be numbers"