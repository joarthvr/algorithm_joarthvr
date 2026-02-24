function solution(dirs) {
  const set = new Set();
  let [x, y] = [0, 0];

  const dirMap = new Map([
    ['U', { x: 0,  y: 1 }],
    ['D', { x: 0,  y: -1 }],
    ['R', { x: 1,  y: 0 }],
    ['L', { x: -1, y: 0 }],
  ]);

  for (const dir of dirs) {
    const move = dirMap.get(dir);
    const prevX = x;
    const prevY = y;

    x += move.x;
    y += move.y;

    if (x > 5) x = 5;
    if (x < -5) x = -5;
    if (y > 5) y = 5;
    if (y < -5) y = -5;

    if (prevX === x && prevY === y) continue;

    const key =
      (prevX < x || (prevX === x && prevY < y))
        ? `${prevX},${prevY},${x},${y}`
        : `${x},${y},${prevX},${prevY}`;

    set.add(key);
  }

  return set.size;
}
