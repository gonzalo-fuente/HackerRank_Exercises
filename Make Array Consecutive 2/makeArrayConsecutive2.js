function solution(statues) {
  let statuesNeeded = 0;
  let currentSize;

  statues.sort((a, b) => a - b);

  for (let i = 0; i < statues.length - 1; i++) {
    currentSize = statues[i];
    while (currentSize !== statues[i + 1] - 1) {
      currentSize++;
      statuesNeeded++;
    }
  }

  return statuesNeeded;
}
