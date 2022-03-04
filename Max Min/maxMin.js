"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
  // Write your code here
  const newArr = arr.sort((a, b) => a - b);
  let unfairness = newArr[k - 1] - newArr[0];

  for (let i = 1; i <= newArr.length - k; i++) {
    if (newArr[i + k - 1] - newArr[i] < unfairness) {
      unfairness = newArr[i + k - 1] - newArr[i];
    }
  }

  return unfairness;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const k = parseInt(readLine().trim(), 10);

  let arr = [];

  for (let i = 0; i < n; i++) {
    const arrItem = parseInt(readLine().trim(), 10);
    arr.push(arrItem);
  }

  const result = maxMin(k, arr);

  ws.write(result + "\n");

  ws.end();
}
