function solution(x, y, n) {
  let answer = 0;
  if (x === y) {
    return answer;
  }
  let queue = [x];
  const set = new Set(queue);
  while (queue.length !== 0) {
    const newQueue = [];
    answer += 1;
    for (const num of queue) {
      for (const newNum of [num + n, 2 * num, 3 * num]) {
        if (newNum === y) {
          return answer;
        }
        if (newNum < y && !set.has(newNum)) {
          set.add(newNum);
          newQueue.push(newNum);
        }
      }
    }
    queue = newQueue;
  }
  return -1;
}