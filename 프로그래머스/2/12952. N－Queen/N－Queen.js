function solution(n) {
  let ans = 0;

  const col = new Array(n).fill(false);
  const diag1 = new Array(2*n).fill(false);
  const diag2 = new Array(2*n).fill(false);

  function dfs(row) {
    if (row === n) {
      ans++;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col[c] || diag1[row+c] || diag2[row-c+n]) continue;

      col[c] = diag1[row+c] = diag2[row-c+n] = true;

      dfs(row + 1);

      col[c] = diag1[row+c] = diag2[row-c+n] = false;
    }
  }

  dfs(0);
  return ans;
}