function solution(arr) {
    // 압축 결과를 저장할 객체
    const count = { 0: 0, 1: 0 };
    
    // 재귀적으로 영역을 압축하는 함수
    function compress(x, y, size) {
        // 해당 영역의 첫 번째 값을 기준으로 설정
        const value = arr[y][x];
        
        // 모든 값이 같은지 확인
        let isUniform = true;
        for (let i = y; i < y + size; i++) {
            for (let j = x; j < x + size; j++) {
                if (arr[i][j] !== value) {
                    isUniform = false;
                    break;
                }
            }
            if (!isUniform) break;
        }
        
        // 모든 값이 같으면 해당 값으로 압축
        if (isUniform) {
            count[value]++;
            return;
        }
        
        // 값이 다르면 4개의 영역으로 분할하여 재귀적으로 압축
        const newSize = size / 2;
        compress(x, y, newSize);                       // 왼쪽 위
        compress(x + newSize, y, newSize);             // 오른쪽 위
        compress(x, y + newSize, newSize);             // 왼쪽 아래
        compress(x + newSize, y + newSize, newSize);   // 오른쪽 아래
    }
    
    // 전체 배열에 대해 압축 시작
    compress(0, 0, arr.length);
    
    // 결과 반환
    return [count[0], count[1]];
}