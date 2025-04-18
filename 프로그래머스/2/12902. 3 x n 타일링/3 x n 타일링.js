/**
 * 3xn 직사각형을 2x1, 1x2 타일로 채우는 방법의 수를 계산하는 함수
 * @param {number} n - 직사각형의 가로 길이
 * @return {number} - 채우는 방법의 수
 */
function solution(n) {
    // n이 홀수인 경우 채울 수 없음
    if (n % 2 === 1) return 0;
    
    const MOD = 1000000007;
    
    // 초기값 설정
    let dp = Array(n + 1).fill(0);
    dp[0] = 1; // 아무것도 없는 경우는 1가지 방법
    dp[2] = 3; // 3x2는 3가지 방법
    
    // 특별한 모양에 대한 누적값
    let sum = dp[0]; // 초기값 1
    
    for (let i = 4; i <= n; i += 2) {
        // 기본 패턴: 직전 케이스에 3x2 블록 추가
        dp[i] = (dp[i - 2] * 3) % MOD;
        
        // 특별한 패턴: 새로운 모양이 생기는 경우
        // i-4, i-6, ..., 0까지의 각 케이스에 2가지 특별한 모양 추가
        for (let j = i - 4; j >= 0; j -= 2) {
            dp[i] = (dp[i] + (dp[j] * 2) % MOD) % MOD;
        }
    }
    
    return dp[n];
}

