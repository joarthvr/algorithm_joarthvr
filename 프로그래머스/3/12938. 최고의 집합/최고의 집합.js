function solution(n, s) {
    if (s < n) return [-1]; // 모든 사람에게 최소 한 조각을 줄 수 없는 경우

    let result = new Array(n).fill(Math.floor(s / n));
    let remainder = s % n;

    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }

    return result.sort((a, b) => a - b);
}
