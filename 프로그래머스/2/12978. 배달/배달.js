function solution(N, road, K) {
    // 1단계: 그래프 구축 (3분)
    const graph = Array.from({length: N + 1}, () => []);
    
    // 양방향 간선 추가 + 중복 간선 처리
    for(const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    // 2단계: 다익스트라 (15분)
    const dist = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    
    dist[1] = 0;  // 시작점 1번 마을
    
    for(let i = 0; i < N; i++) {
        // 방문하지 않은 노드 중 최소 거리 노드 찾기
        let minNode = -1;
        for(let j = 1; j <= N; j++) {
            if(!visited[j] && (minNode === -1 || dist[j] < dist[minNode])) {
                minNode = j;
            }
        }
        
        visited[minNode] = true;
        
        // 인접 노드들의 거리 업데이트
        for(const [next, cost] of graph[minNode]) {
            if(!visited[next]) {
                dist[next] = Math.min(dist[next], dist[minNode] + cost);
            }
        }
    }
    
    // 3단계: K 이하 거리 마을 개수 세기 (2분)
    let count = 0;
    for(let i = 1; i <= N; i++) {
        if(dist[i] <= K) count++;
    }
    
    return count;
}