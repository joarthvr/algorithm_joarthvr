function solution(dirs) {
    // 방문한 경로를 저장할 Set
    // 경로는 '시작x,시작y:도착x,도착y' 형태의 문자열로 저장
    const visited = new Set();
    
    // 현재 위치
    let x = 0;
    let y = 0;
    
    // 방향에 따른 좌표 변화량
    const moves = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    
    for (const dir of dirs) {
        // 다음 위치 계산
        const nx = x + moves[dir][0];
        const ny = y + moves[dir][1];
        
        // 경계 체크
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        // 양방향 경로를 저장 (A->B와 B->A는 같은 경로)
        const path1 = `${x},${y}:${nx},${ny}`;
        const path2 = `${nx},${ny}:${x},${y}`;
        
        visited.add(path1);
        visited.add(path2);
        
        // 현재 위치 업데이트
        x = nx;
        y = ny;
    }
    
    // Set에 저장된 경로 개수의 절반이 실제 처음 걸어본 길의 길이
    // (각 경로를 양방향으로 저장했으므로)
    return visited.size / 2;
}
