// 5- Read data from data.json file.
// 5.1 - as sync  
var fs = require('fs');

// Read data from data.json synchronously
var data = fs.readFileSync('data.json');

// Parse JSON data
var jsonData = JSON.parse(data);

console.log(jsonData);

// 5.2 - as async

// Read data from data.json asynchronously
fs.readFile('data.json', (err, data) => {
  if (err) throw err;

  // Parse JSON data
  var jsonData = JSON.parse(data);

  console.log(jsonData);
});

console.log('Done!');