function solution(users, emoticons) {
    const discountRates = [10, 20, 30, 40];
    let maxSubscribers = 0;
    let maxRevenue = 0;
    
    // 모든 가능한 할인율 조합 생성
    function generateDiscountCombinations(depth, discounts) {
        if (depth === emoticons.length) {
            // 현재 할인율 조합으로 결과 계산
            const [subscribers, revenue] = calculateResults(discounts);
            
            // 최적의 결과 업데이트
            if (subscribers > maxSubscribers || 
                (subscribers === maxSubscribers && revenue > maxRevenue)) {
                maxSubscribers = subscribers;
                maxRevenue = revenue;
            }
            return;
        }
        
        // 각 이모티콘에 대해 가능한 모든 할인율 시도
        for (let rate of discountRates) {
            discounts[depth] = rate;
            generateDiscountCombinations(depth + 1, discounts);
        }
    }
    
    // 주어진 할인율 조합으로 결과 계산
    function calculateResults(discounts) {
        let totalSubscribers = 0;
        let totalRevenue = 0;
        
        // 각 사용자별로 계산
        for (const [userRate, userPrice] of users) {
            let userSpending = 0;
            
            // 각 이모티콘에 대해 사용자의 구매 여부 확인
            for (let i = 0; i < emoticons.length; i++) {
                if (discounts[i] >= userRate) {
                    // 할인율이 사용자의 기준 이상이면 구매
                    const discountedPrice = emoticons[i] * (100 - discounts[i]) / 100;
                    userSpending += discountedPrice;
                }
            }
            
            // 사용자의 총 지출이 기준 가격 이상이면 구독
            if (userSpending >= userPrice) {
                totalSubscribers++;
            } else {
                totalRevenue += userSpending;
            }
        }
        
        return [totalSubscribers, Math.floor(totalRevenue)];
    }
    
    // 모든 할인율 조합에 대해 계산 실행
    generateDiscountCombinations(0, new Array(emoticons.length).fill(0));
    
    return [maxSubscribers, maxRevenue];
}