/* Create test file with dummy data
3- Rename file from test.txt to info.txt
From node docs */

var fs = require('fs');

// Create test file with dummy data
fs.writeFile('test.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('Test file created!')});

// Rename file from test.txt to info.txt
fs.rename('Test.txt', 'Info.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
}
);


