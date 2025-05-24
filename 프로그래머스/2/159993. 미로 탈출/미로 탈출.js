function solution(maps) {
    //bfs
    
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[0,1], [1,0], [0,-1], [-1,0]]; // 우 상 좌 하
    
    const findPos = (char) => {
        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(maps[i][j] === char){
                    return [i,j]
                }
            }
        }
    }
    
    const bfs = (char, target) => {
        const [sx, sy] = findPos(char);
        
        const visited = Array.from({length : n}, () => Array(m).fill(false));
        visited[sx][sy] = true;
        const queue = [[sx,sy,0]];
        
        while(queue.length > 0){
            const [x, y, time] = queue.shift();
            if(maps[x][y] === target){
                return time;
            }
            
            for(let i = 0; i < 4; i++){
                const nx = x + directions[i][0]
                const ny = y + directions[i][1];
                if(nx >= 0 && ny >= 0 && nx < n && ny < m 
                   && (maps[nx][ny] !== 'X') 
                   && (visited[nx][ny] === false)){
                    queue.push([nx, ny, time + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
        return -1;
    }
    const tL = bfs('S', 'L');
    const tE = bfs('L', 'E');
    
    return tL === -1 || tE === -1 ? -1 : tL + tE;
    
}