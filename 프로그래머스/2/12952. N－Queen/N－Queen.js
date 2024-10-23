function solution(n) {
  let results = 0;
  const queens = new Array(n).fill(-1);

  function isValid(row) {
    for (let i = 0; i < row; i++) {
      // 주어진 식을 활용한 검증
      if (
        Math.abs(row - i) === Math.abs(queens[row] - queens[i]) ||
        queens[i] === queens[row]
      ) {
        return false;
      }
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      results++;
      return;
    }

    for (let col = 0; col < n; col++) {
      queens[row] = col;
      if (isValid(row)) {
        backtrack(row + 1);
      }
    }
  }

  backtrack(0);
  return results;
}