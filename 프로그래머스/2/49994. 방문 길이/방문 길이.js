function solution(dirs) {
    // 현재 위치
    let x = 0;
    let y = 0;
    
    // 방문한 경로를 저장할 Set (양방향 경로 처리를 위해)
    const visitedPaths = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        // 이전 위치 저장
        let prevX = x;
        let prevY = y;
        
        // 방향에 따라 이동
        if (dirs[i] === 'U' && y < 5) {
            y += 1;
        } else if (dirs[i] === 'D' && y > -5) {
            y -= 1;
        } else if (dirs[i] === 'R' && x < 5) {
            x += 1;
        } else if (dirs[i] === 'L' && x > -5) {
            x -= 1;
        } else {
            // 범위를 벗어나는 경우 무시 (위치 변화 없음)
            continue;
        }
        
        // 경로 표현 (양방향을 고려하여 작은 좌표를 먼저 표기)
        const path = prevX < x || (prevX === x && prevY < y) 
            ? `${prevX},${prevY}-${x},${y}` 
            : `${x},${y}-${prevX},${prevY}`;
        
        // 방문한 경로 추가
        visitedPaths.add(path);
    }
    
    // 유니크한 경로의 수 반환
    return visitedPaths.size;
}

