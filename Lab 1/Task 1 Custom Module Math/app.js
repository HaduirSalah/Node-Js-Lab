var math=require("./Math");

var add=math.operatoion1(1,3); 
console.log("The sum : ", add); // Output: 4

var sub=math.operatoion2(5,2);
console.log("The Sub : ",sub);  // Output: 3

var multi=math.operatoion3(2,3);
console.log("The Multiply : ",multi);  // Output: 6



var add=math.operatoion1('A',3); 
console.log("The sum : ", add); // Output: Throws an error: "Invalid input: both arguments must be numbers."

var sub=math.operatoion2('B','C');
console.log("The Sub : ",sub);  // Output: Throws an error: "Invalid input: both arguments must be numbers."

var multi=math.operatoion3(3,'A');
console.log("The Multiply : ",multi);  // Output: Throws an error: "Invalid input: both arguments must be numbers."