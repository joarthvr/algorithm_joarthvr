function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 상하좌우 이동을 위한 방향 배열
    const dx = [0, 0, -1, 1]; //[0] 
    const dy = [-1, 1, 0, 0];
    
    // 방문 체크 및 거리 저장용 배열
    const visited = Array.from({length: n}, () => Array(m).fill(0));
    
    // BFS를 위한 큐
    const queue = [[0, 0]];  // 시작점
    visited[0][0] = 1;       // 시작점 방문 처리 및 거리 1
    
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        
        // 도착점에 도달한 경우
        if (x === n-1 && y === m-1) {
            return visited[x][y];
        }
        
        // 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 맵 범위 내이고, 벽이 아니며, 방문하지 않은 경우
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && 
                maps[nx][ny] === 1 && visited[nx][ny] === 0) {
                queue.push([nx, ny]);
                visited[nx][ny] = visited[x][y] + 1;
            }
        }
    }
    
    // 도착점에 도달할 수 없는 경우
    return -1;
}