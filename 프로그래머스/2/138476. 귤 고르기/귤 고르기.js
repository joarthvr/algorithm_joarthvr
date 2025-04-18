function solution(k, tangerine) {
    // 과일 크기별 개수를 저장하는 객체 생성
    const fruitCounts = {};
    
    // 각 과일 크기(종류)별 개수 계산
    for (const size of tangerine) {
        fruitCounts[size] = (fruitCounts[size] || 0) + 1;
    }
    
    // 개수 기준으로 내림차순 정렬 (많은 개수의 종류부터 선택하면 종류 수를 최소화할 수 있음)
    const counts = Object.values(fruitCounts).sort((a, b) => b - a);
    
    let selectedFruits = 0;
    let typeCount = 0;
    
    // 개수가 많은 종류부터 선택
    for (const count of counts) {
        selectedFruits += count;
        typeCount++;
        
        // k개 이상 선택했으면 종료
        if (selectedFruits >= k) {
            break;
        }
    }
    
    return typeCount;
}