function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    // DP 테이블: dp[i][j] = (i,j)를 오른쪽 아래 꼭짓점으로 하는 가장 큰 정사각형의 한 변 길이
    const dp = Array(n).fill().map(() => Array(m).fill(0));
    let maxSide = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 1) {
                if (i === 0 || j === 0) {
                    // 첫 번째 행이나 열은 최대 1x1 정사각형만 가능
                    dp[i][j] = 1;
                } else {
                    // 핵심 점화식!
                    dp[i][j] = Math.min(
                        dp[i-1][j],     // 위쪽 정사각형
                        dp[i][j-1],     // 왼쪽 정사각형  
                        dp[i-1][j-1]    // 대각선 정사각형
                    ) + 1;
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    
    return maxSide * maxSide;
}