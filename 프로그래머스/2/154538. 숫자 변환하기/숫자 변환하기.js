function solution(x, y, n) {
    if (x === y) return 0;
    if (x > y) return -1;
    
    // 최적화: 배열 대신 객체 사용
    const dist = {};
    dist[x] = 0;
    
    // 최적화: 배열 대신 더 효율적인 큐 구현
    const queue = [x];
    let front = 0;
    
    while (front < queue.length) {
        const current = queue[front++];
        const nextCount = dist[current] + 1;
        
        // 세 가지 가능한 다음 상태
        const nextStates = [current + n, current * 2, current * 3];
        
        for (const next of nextStates) {
            if (next === y) return nextCount;
            
            // 범위를 벗어나거나 이미 방문한 상태 스킵
            if (next > y || dist[next] !== undefined) continue;
            
            dist[next] = nextCount;
            queue.push(next);
        }
    }
    
    return -1;
}