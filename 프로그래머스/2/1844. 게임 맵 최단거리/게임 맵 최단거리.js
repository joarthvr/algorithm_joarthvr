function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs() {
        const queue = [[0, 0, 1]];  // [x, y, distance]
        maps[0][0] = 0;  // 방문 표시
        
        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();
            
            if (x === n - 1 && y === m - 1) {
                return dist;  // 도착점에 도달
            }
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                    queue.push([nx, ny, dist + 1]);
                    maps[nx][ny] = 0;  // 방문 표시
                }
            }
        }
        
        return -1;  // 도착점에 도달할 수 없는 경우
    }
    
    return bfs();
}