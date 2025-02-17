function solution(prices) {
    const len = prices.length;
    const result = [];
    
    for(let i = 0; i < len; i++) {
        let seconds = 0;
        
        // i 이후의 가격들과 비교
        for(let j = i + 1; j < len; j++) {
            seconds++; // 시간 증가
            if(prices[i] > prices[j]) { // 가격이 떨어지면
                break; // 중단
            }
        }
        
        result.push(seconds);
    }
    
    return result;
}