function solution(arr) {
    // 결과를 저장할 배열 [0의 개수, 1의 개수]
    const answer = [0, 0];
    
    function compress(x, y, n) {
        // 영역의 첫 번째 값
        const first = arr[y][x];
        
        // 영역 내 모든 값이 같은지 빠르게 확인
        let allSame = true;
        for (let i = y; i < y + n; i++) {
            for (let j = x; j < x + n; j++) {
                if (arr[i][j] !== first) {
                    allSame = false;
                    break;
                }
            }
            if (!allSame) break;
        }
        
        // 모든 값이 같으면
        if (allSame) {
            answer[first]++;
            return;
        }
        
        // 4등분하여 재귀 호출
        const half = n / 2;
        compress(x, y, half);               // 좌상단
        compress(x + half, y, half);        // 우상단
        compress(x, y + half, half);        // 좌하단
        compress(x + half, y + half, half); // 우하단
    }
    
    compress(0, 0, arr.length);
    return answer;
}
