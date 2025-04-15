function solution(numbers) {
  return numbers
    .map((x) => {
      x = BigInt(x);

      // 짝수는 항상 0으로 끝남. +1만 해주면 비트가 한 개가 다르면서 최솟값
      if (x % 2n === 0n) return x + 1n;

      let bit = 1n;
      while ((x & bit) !== 0n) bit <<= 1n; // 처음 등장하는 0을 찾는다
      return x + bit - (bit >> 1n); // 0을 1로 변경하고, 오른쪽 1을 0으로 변경
    })
    .map(Number); // 다시 일반 숫자로 변환
}