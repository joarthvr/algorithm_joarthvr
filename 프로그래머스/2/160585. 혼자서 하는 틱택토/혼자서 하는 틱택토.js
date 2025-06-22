function solution(board) {
    // 1. O와 X의 개수 세기
    let oCount = 0, xCount = 0;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') oCount++;
            else if (board[i][j] === 'X') xCount++;
        }
    }
    
    // 2. 기본 규칙 검증
    // O가 먼저 시작하므로 O >= X
    if (oCount < xCount) return 0;
    
    // 개수 차이는 최대 1개
    if (oCount - xCount > 1) return 0;
    
    // 3. 승리 조건 확인 함수
    function checkWinner(board, player) {
        // 가로 체크
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }
        }
        
        // 세로 체크
        for (let j = 0; j < 3; j++) {
            if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
                return true;
            }
        }
        
        // 대각선 체크
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        
        return false;
    }
    
    const oWin = checkWinner(board, 'O');
    const xWin = checkWinner(board, 'X');
    
    // 4. 승리 조건 검증
    // 동시에 둘 다 이길 수 없음
    if (oWin && xWin) return 0;
    
    // O가 이겼다면, O의 턴에서 게임이 끝났어야 함 (O = X)
    if (oWin && oCount !== xCount + 1) return 0;
    
    // X가 이겼다면, X의 턴에서 게임이 끝났어야 함 (O = X)
    if (xWin && oCount !== xCount) return 0;
    
    return 1;
}