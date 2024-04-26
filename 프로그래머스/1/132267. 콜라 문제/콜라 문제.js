function solution(a, b, n) {
    let totalCokes = 0; // 받을 수 있는 콜라의 총 수
    while (n >= a) { // n이 a보다 작을 때까지 반복
        let newCokes = Math.floor(n / a) * b; // 현재 빈 병으로 교환할 수 있는 콜라 수
        totalCokes += newCokes; // 총 콜라 수에 추가
        n = newCokes + (n % a); // 마신 후 남은 빈 병 수
    }
    return totalCokes; // 총 받을 수 있는 콜라 수 반환
}
