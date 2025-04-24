function solution(topping) {
    let count = 0;
    const len = topping.length;
    
    // 왼쪽과 오른쪽의 토핑 종류 개수를 미리 계산
    const leftMap = new Map();
    const rightMap = new Map();
    
    // 처음에 모든 토핑을 오른쪽에 넣기
    for (let t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }
    
    // 왼쪽으로 하나씩 옮기면서 확인
    for (let i = 0; i < len - 1; i++) {
        const t = topping[i];
        
        // 왼쪽에 추가
        leftMap.set(t, (leftMap.get(t) || 0) + 1);
        
        // 오른쪽에서 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }
        
        // 종류 수가 같으면 카운트 증가
        if (leftMap.size === rightMap.size) {
            count++;
        }
    }
    
    return count;
}