'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const time = s.slice(0, 8);
  const format = s.slice(8);
  const arr = time.split(':');

  let hours = parseInt(arr[0], 10);
  if (format === 'PM') {
    if (hours !== 12) {
      hours += 12;
    }
    arr[0] = hours.toString(10);
  } else {
    if (hours === 12) {
      arr[0] = '00';
    }
  }

  return arr.join(':');
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
