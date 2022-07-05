function solution(matrix) {
  let totalCost = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break;
      } else {
        totalCost += matrix[j][i];
      }
    }
  }
  return totalCost;
}
