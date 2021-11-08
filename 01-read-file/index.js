const fs = require('fs');
const path = require('path');
const process = require('process');

fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8').pipe(
  process.stdout
);
