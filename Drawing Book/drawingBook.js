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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let flip = 0;
  let page;

  if (n % 2 === 0) {
    page = n / 2;
  } else {
    page = (n - 1) / 2;
  }

  if (p - 1 < n - p) {
    // Begin by te front of the book
    while (p !== flip * 2 && p !== flip * 2 + 1) {
      flip++;
    }
  } else {
    // Begin by the end of the book
    while (p !== page * 2 && p !== page * 2 + 1) {
      flip++;
      page--;
    }
  }
  return flip;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
