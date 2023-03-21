// 7- create Dir -> bonus 

var fs = require('fs');

// Create directory
// - as async
fs.mkdir('myDir1', (err) => {
  if (err) throw err;
  console.log('myDir1 created!');
});

// - as sync
fs.mkdirSync('myDir2', (err) => {
  if (err) throw err;
  console.log('myDir2 created!')
});

console.log('Done!');