function solution(weights) {
    const weightMap = new Map();
    let count = 0;
    
    // 무게별 개수 카운트
    for (const weight of weights) {
        weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
    }
    
    // 각 무게에 대해 처리
    for (const [weight, cnt] of weightMap) {
        // 같은 무게끼리
        if (cnt > 1) {
            count += cnt * (cnt - 1) / 2;
        }
        
        // 다른 무게와의 조합 (한 번만 계산)
        const ratios = [
            [2, 3], [1, 2], [3, 4]
        ];
        
        for (const [a, b] of ratios) {
            const targetWeight = weight * b / a;
            if (targetWeight > weight && weightMap.has(targetWeight)) {
                count += cnt * weightMap.get(targetWeight);
            }
        }
    }
    
    return count;
}