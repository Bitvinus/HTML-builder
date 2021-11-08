const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { stdin, stdout } = require('process');

const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'), {
  encoding: 'utf-8',
});
const read = readline.createInterface({ input: stdin, output: stdout });
stdout.write('Enter text:\n');

const exit = () => {
  stdout.write('See ya!');
  stream.end();
  read.close();
};

read.on('line', input => {
  if (input !== 'exit') {
    stream.write(input + '\n');
  } else {
    exit();
  }
});

read.on('sigint', () => {
  exit();
});
