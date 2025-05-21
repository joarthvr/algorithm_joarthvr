function solution(orders, course) {
    const answer = [];
    
    // 각 코스 크기별로 처리
    course.forEach(size => {
        // 조합별 주문 횟수 저장
        const comboCounts = {};
        
        // 각 손님의 주문마다 조합 생성
        orders.forEach(order => {
            // 주문 메뉴를 알파벳순으로 정렬
            const sortedOrder = [...order].sort().join('');
            
            // 조합 찾기
            findCombos(sortedOrder, size, 0, "", comboCounts);
        });
        
        // 가장 많이 주문된 횟수 찾기 (최소 2번 이상)
        let maxCount = 0;
        for (const combo in comboCounts) {
            if (comboCounts[combo] >= 2 && comboCounts[combo] > maxCount) {
                maxCount = comboCounts[combo];
            }
        }
        
        // 최대 주문 횟수인 조합만 결과에 추가
        if (maxCount >= 2) {
            for (const combo in comboCounts) {
                if (comboCounts[combo] === maxCount) {
                    answer.push(combo);
                }
            }
        }
    });
    
    // 알파벳 순으로 정렬
    return answer.sort();
}

// 백트래킹으로 조합 찾기
function findCombos(order, targetSize, startIndex, currentCombo, comboCounts) {
    // 목표 크기에 도달하면 카운트 증가
    if (currentCombo.length === targetSize) {
        comboCounts[currentCombo] = (comboCounts[currentCombo] || 0) + 1;
        return;
    }
    
    // 현재 위치부터 선택 가능한 모든 메뉴 시도
    for (let i = startIndex; i < order.length; i++) {
        // 현재 메뉴 추가하고 다음 단계로
        findCombos(order, targetSize, i + 1, currentCombo + order[i], comboCounts);
    }
}