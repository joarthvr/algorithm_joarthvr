function solution(brown, yellow) {
    const total = brown + yellow;
    
    // 가능한 모든 세로 길이에 대해 검사
    for (let height = 3; height <= Math.sqrt(total); height++) {
        // 전체 면적이 height로 나누어 떨어지는지 확인
        if (total % height === 0) {
            const width = total / height;
            
            // 갈색 격자 수 조건 확인
            if (2 * width + 2 * height - 4 === brown) {
                return [width, height]; // [가로, 세로] 반환
            }
        }
    }
}