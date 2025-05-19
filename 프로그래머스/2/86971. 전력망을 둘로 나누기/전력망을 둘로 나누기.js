function solution(n, wires) {
    // 그래프 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    let minDiff = Infinity;
    
    // 각 전선을 하나씩 끊어보기
    for (const [v1, v2] of wires) {
        // v1과 v2 사이의 전선 끊기
        
        // DFS로 v1에서 시작하는 컴포넌트 크기 계산
        const size1 = getSize(v1, v2, graph, n);
        const size2 = n - size1; // 두 번째 컴포넌트 크기
        
        // 차이 갱신
        minDiff = Math.min(minDiff, Math.abs(size1 - size2));
    }
    
    return minDiff;
}

// DFS로 컴포넌트 크기 계산
function getSize(start, excluded, graph, n) {
    const visited = Array(n + 1).fill(false);
    
    function dfs(node) {
        visited[node] = true;
        let count = 1; // 현재 노드 포함
        
        for (const next of graph[node]) {
            // 끊어진 전선이 아니고, 방문하지 않은 노드만 탐색
            if (!visited[next] && !(
                (node === start && next === excluded) || 
                (node === excluded && next === start)
            )) {
                count += dfs(next); // 서브트리 크기 합산
            }
        }
        
        return count;
    }
    
    return dfs(start);
}