function solution(want, number, discount) {
    let result = 0;
    
    // 원하는 상품과 수량을 맵으로 구성
    const wantMap = {};
    for(let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }
    
    // 10일 윈도우를 이동하며 체크
    for(let i = 0; i <= discount.length - 10; i++) {
        // 현재 10일간의 할인 상품 카운트
        const countMap = {};
        for(let j = 0; j < 10; j++) {
            const item = discount[i + j];
            countMap[item] = (countMap[item] || 0) + 1;
        }
        
        // 원하는 모든 상품이 충족되는지 확인
        let allSatisfied = true;
        for(let w of want) {
            if(countMap[w] !== wantMap[w]) {
                allSatisfied = false;
                break;
            }
        }
        
        if(allSatisfied) result++;
    }
    
    return result;
}