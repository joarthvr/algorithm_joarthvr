function solution(n, wires) {
    // 그래프 구성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    let minDiff = n;
    
    // 각 간선을 하나씩 제거해보기
    for (const [v1, v2] of wires) {
        // v1에서 시작하는 컴포넌트 크기 계산 (v1-v2 간선 제외)
        const count1 = countNodes(v1, v2, graph, n);
        const count2 = n - count1;
        
        const diff = Math.abs(count1 - count2);
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
}

// 간선 하나를 제외한 컴포넌트 크기 계산
function countNodes(start, except, graph, n) {
    const visited = new Array(n + 1).fill(false);
    let count = 0;
    
    function dfs(node) {
        visited[node] = true;
        count++;
        
        for (const neighbor of graph[node]) {
            // 제외할 간선이 아니고, 아직 방문하지 않은 노드라면
            if (!(node === start && neighbor === except) && 
                !(node === except && neighbor === start) && 
                !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    dfs(start);
    return count;
}