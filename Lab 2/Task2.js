/* 2- How to read a file line by line using node.js?
HINT: Readline Module in Node.js allows the reading of input stream line by line. 
The given node.js code opens the file 'gr	eet.txt' and returns the content line by line.
*/

var readline = require('readline');
var fs = require('fs');

var fileStream = fs.createReadStream('Task2.txt');

var rl = readline.createInterface({
  input: fileStream
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});

