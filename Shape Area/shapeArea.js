function solution(n) {
  if (n === 1) {
    return n;
  } else {
    return solution(n - 1) + (n - 1) * 4;
  }
}
