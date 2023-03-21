// 4- Remove file info.txt

const fs = require('fs');

// Remove file info.txt
fs.unlink('info.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});

