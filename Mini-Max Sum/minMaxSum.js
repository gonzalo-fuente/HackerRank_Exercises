'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let sortedArr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (i < sortedArr.length - 1) {
      min += sortedArr[i];
    }
    if (i > 0) {
      max += sortedArr[i];
    }
  }

  console.log(`${min} ${max}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
