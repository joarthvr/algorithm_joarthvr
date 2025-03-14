function solution(x, y, n) {
    // 시작점과 목표가 같으면 0 반환
    if (x === y) return 0;
    
    // 동적 프로그래밍 배열: dp[i]는 x에서 i까지 도달하는 최소 연산 횟수
    // 불가능한 경우는 Infinity로 초기화
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0; // 시작점은 0번 연산
    
    for (let i = x; i <= y; i++) {
        // 현재 위치에 도달할 수 없는 경우 스킵
        if (dp[i] === Infinity) continue;
        
        // 세 가지 연산 적용
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }
    
    // 도달할 수 없으면 -1 반환
    return dp[y] === Infinity ? -1 : dp[y];
}