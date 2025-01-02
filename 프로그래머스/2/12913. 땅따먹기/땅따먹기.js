function solution(land) {
    // 행의 개수
    const n = land.length;
    
    // dp 배열 생성 (첫 행은 그대로 복사)
    const dp = Array.from(Array(n), () => new Array(4).fill(0));
    dp[0] = [...land[0]];
    
    // 두 번째 행부터 시작
    for(let i = 1; i < n; i++) {
        // 각 열에 대해
        for(let j = 0; j < 4; j++) {
            // 이전 행에서 현재 열을 제외한 값들 중 최댓값을 더함
            dp[i][j] = land[i][j] + Math.max(
                ...[...dp[i-1].slice(0,j), ...dp[i-1].slice(j+1)]
            );
        }
    }
    
    // 마지막 행에서 최댓값을 반환
    return Math.max(...dp[n-1]);
}