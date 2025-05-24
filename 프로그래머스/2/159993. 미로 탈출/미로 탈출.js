function solution(maps) {
    // 1. 기본 설정 (30초)
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    
    // 2. 위치 찾기 함수 (1분)
    const findPos = (char) => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(maps[i][j] === char) return [i, j];
            }
        }
    };
    
    // 3. BFS 함수 (5분)
    const bfs = (sr, sc, target) => {
        const visited = Array.from({length: n}, () => Array(m).fill(false));
        const queue = [[sr, sc, 0]];
        visited[sr][sc] = true;
        
        while(queue.length > 0) {
            const [r, c, d] = queue.shift();
            if(maps[r][c] === target) return d;
            
            for(const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if(nr >= 0 && nr < n && nc >= 0 && nc < m && 
                   !visited[nr][nc] && maps[nr][nc] !== 'X') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, d + 1]);
                }
            }
        }
        return -1;
    };
    
    // 4. 메인 로직 (2분)
    const [sr, sc] = findPos('S');
    const [lr, lc] = findPos('L');
    
    const d1 = bfs(sr, sc, 'L');
    if(d1 === -1) return -1;
    
    const d2 = bfs(lr, lc, 'E');
    if(d2 === -1) return -1;
    
    return d1 + d2;
}
