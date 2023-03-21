// write inside file info.txt “hello iti”

var fs = require('fs');

// Write "hello iti" to info.txt
fs.writeFile('info.txt', 'hello iti', (err) => {
  if (err) throw err;
  console.log('Data written to file!');
});
