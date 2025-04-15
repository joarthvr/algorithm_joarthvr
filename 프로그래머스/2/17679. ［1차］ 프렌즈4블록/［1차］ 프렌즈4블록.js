function solution(m, n, board) {
    // 문자열 배열을 2차원 배열로 변환
    board = board.map(row => row.split(''));
    
    let removedBlocks = 0;
    let hasMatches = true;
    
    // 매치되는 블록이 없을 때까지 반복
    while (hasMatches) {
        hasMatches = false;
        
        // 1. 제거할 블록 찾기 (2x2 패턴)
        const toRemove = Array.from({ length: m }, () => Array(n).fill(false));
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = board[i][j];
                
                // 빈 공간이면 건너뜀
                if (current === '') continue;
                
                // 2x2 블록 확인
                if (current === board[i][j+1] && 
                    current === board[i+1][j] && 
                    current === board[i+1][j+1]) {
                    toRemove[i][j] = true;
                    toRemove[i][j+1] = true;
                    toRemove[i+1][j] = true;
                    toRemove[i+1][j+1] = true;
                    hasMatches = true;
                }
            }
        }
        
        // 2. 블록 제거 및 개수 세기
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (toRemove[i][j]) {
                    board[i][j] = '';
                    removedBlocks++;
                }
            }
        }
        
        // 3. 블록 떨어뜨리기
        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] === '') {
                    // 위에서 내려올 블록 찾기
                    let k = i - 1;
                    while (k >= 0 && board[k][j] === '') {
                        k--;
                    }
                    
                    // 내려올 블록이 있으면 교체
                    if (k >= 0) {
                        board[i][j] = board[k][j];
                        board[k][j] = '';
                    }
                }
            }
        }
    }
    
    return removedBlocks;
}