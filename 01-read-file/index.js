const fs = require('fs');
const path = require('path');
const process = require('process');

// const stream = fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf8');

// stream.on('readable', function () {
//   let data = stream.read();
//   console.log(data);
// });

// stream.on('end', function () {
//   console.log('THE END');
// });

fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8').pipe(
  process.stdout
);
