function solution(n, w, num) {
    // 대상 상자가 위치한 층 계산 (1부터 시작)
    const targetLayer = Math.ceil(num / w);
    
    // 대상 상자의 해당 층에서의 열 위치 계산 (0부터 시작)
    let column;
    if (targetLayer % 2 === 1) {
        // 홀수 층: 왼쪽→오른쪽
        column = (num - 1) % w;
    } else {
        // 짝수 층: 오른쪽→왼쪽
        column = w - 1 - ((num - 1) % w);
    }
    
    // 결과 카운트 (대상 상자 포함)
    let count = 1;
    
    // 대상 상자 위의 모든 상자 계산
    for (let layer = targetLayer + 1; layer <= Math.ceil(n / w); layer++) {
        // 해당 층에서의 시작 상자 번호
        const startNum = (layer - 1) * w + 1;
        // 해당 층에 있는 상자 개수 (마지막 층은 일부만 있을 수 있음)
        const boxesInLayer = Math.min(w, n - (layer - 1) * w);
        
        if (layer % 2 === 1) {
            // 홀수 층: 왼쪽→오른쪽
            if (column < boxesInLayer) {
                count++;
            }
        } else {
            // 짝수 층: 오른쪽→왼쪽
            if (w - 1 - column < boxesInLayer) {
                count++;
            }
        }
    }
    
    return count;
}