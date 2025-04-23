function solution(k, dungeons) {
    // 던전 방문 여부를 추적하는 배열
    const visited = Array(dungeons.length).fill(false);
    let maxCount = 0;
    
    // DFS 함수: 현재 피로도와 탐험한 던전 수를 인자로 받음
    function dfs(fatigue, count) {
        // 현재까지 탐험한 던전 수를 최대값과 비교하여 업데이트
        maxCount = Math.max(maxCount, count);
        
        // 모든 던전을 하나씩 시도해봄
        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, costFatigue] = dungeons[i];
            
            // 아직 방문하지 않았고, 현재 피로도로 탐험 가능한 던전이면
            if (!visited[i] && fatigue >= minFatigue) {
                visited[i] = true;              // 던전 방문 표시
                dfs(fatigue - costFatigue, count + 1);  // 피로도 소모하고 재귀 호출
                visited[i] = false;             // 백트래킹: 방문 표시 해제
            }
        }
    }
    
    // 초기 피로도와 던전 수 0으로 DFS 시작
    dfs(k, 0);
    
    return maxCount;
}