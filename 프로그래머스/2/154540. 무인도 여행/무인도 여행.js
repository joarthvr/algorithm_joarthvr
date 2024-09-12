function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const result = [];

  const dfs = (x, y) => {
    let food = parseInt(maps[x][y]);

    visited[x][y] = true;

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < rows &&
        ny < cols &&
        !visited[nx][ny] &&
        maps[nx][ny] !== "X"
      ) {
        food += dfs(nx, ny);
      }
    }
    return food;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        const days = dfs(i, j);
        result.push(days);
      }
    }
  }

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);
}