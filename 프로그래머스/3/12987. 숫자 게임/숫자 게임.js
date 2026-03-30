function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let a = 0;
  let b = 0;

  while (a < A.length && b < B.length) {
    if (B[b] > A[a]) {
      answer++;
      a++;
      b++;
    } else {
      b++;
    }
  }

  return answer;
}