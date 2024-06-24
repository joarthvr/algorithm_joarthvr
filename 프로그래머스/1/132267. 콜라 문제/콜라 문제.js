function solution(a, b, n) {
    let result = 0; // 최종 결과를 저장할 변수
    
    // n이 a보다 크거나 같을 때까지 반복
    while (n >= a) {
        let newBottles = Math.floor(n / a) * b; // 새로 받을 병의 수
        result += newBottles; // 결과에 새 병의 수를 더함
        n = newBottles + (n % a); // 남은 빈 병의 수와 새 병의 수를 더하여 새로운 n 값을 설정
    }
    
    return result; // 최종 결과 반환
}
