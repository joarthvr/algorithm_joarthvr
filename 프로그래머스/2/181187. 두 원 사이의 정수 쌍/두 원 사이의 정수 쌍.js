function solution(r1, r2) {
  let count = 0;
  for (let x = 1; x <= r2; x++) {
    const maxH = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    const minH = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) || 0;   
    count += maxH - minH + 1;
  }
  return count * 4;
}