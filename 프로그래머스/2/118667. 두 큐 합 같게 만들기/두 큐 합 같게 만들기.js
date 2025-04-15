function solution(queue1, queue2) {
    // 두 큐의 합 계산
    const sum1 = queue1.reduce((acc, val) => acc + val, 0);
    const sum2 = queue2.reduce((acc, val) => acc + val, 0);
    const totalSum = sum1 + sum2;
    
    // 총합이 홀수면 두 큐의 합을 같게 만들 수 없음
    if (totalSum % 2 !== 0) {
        return -1;
    }
    
    const target = totalSum / 2;
    
    // 효율적인 처리를 위해 두 큐를 하나의 원형 큐로 생각
    const combinedQueue = [...queue1, ...queue2];
    const n = combinedQueue.length;
    
    // 최대 작업 횟수 제한 (두 큐의 모든 요소를 한 번씩 이동하는 경우의 최대값)
    const maxOperations = n * 2;
    
    // 포인터를 사용한 큐 시뮬레이션
    let start1 = 0;             // queue1의 시작 인덱스
    let end1 = queue1.length-1; // queue1의 끝 인덱스
    let currentSum1 = sum1;     // queue1의 현재 합
    
    for (let count = 0; count <= maxOperations; count++) {
        // 목표에 도달했으면 작업 횟수 반환
        if (currentSum1 === target) {
            return count;
        }
        
        // queue1의 합이 목표보다 크면 왼쪽에서 요소 제거
        if (currentSum1 > target) {
            const element = combinedQueue[start1 % n];
            currentSum1 -= element;
            start1++;
        }
        // queue1의 합이 목표보다 작으면 오른쪽에 요소 추가
        else {
            end1++;
            const element = combinedQueue[end1 % n];
            currentSum1 += element;
        }
        
        // 모든 요소가 한쪽 큐에 들어가면 불가능
        if (end1 - start1 + 1 === 0 || end1 - start1 + 1 === n) {
            return -1;
        }
    }
    
    // 최대 작업 횟수를 초과하면 불가능
    return -1;
}

