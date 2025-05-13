function solution(land) {
    const n = land.length;
    
    // dp 배열 초기화 (메모리 절약을 위해 이전 행만 저장)
    let prev = [...land[0]];
    // 두 번째 행부터 시작
    for (let i = 1; i < n; i++) {
        const current = [0, 0, 0, 0];
        
        // 현재 행의 각 열에 대해
        for (let j = 0; j < 4; j++) {
            // 이전 행에서 다른 열들 중 최댓값 찾기
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    current[j] = Math.max(current[j], prev[k] + land[i][j]);
                }
            }
        }
        
        prev = current;
       
    }
    
    // 마지막 행에서의 최댓값 반환
    return Math.max(...prev);
}