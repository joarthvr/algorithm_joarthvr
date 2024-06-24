function solution(number, limit, power) {
    // 각 숫자의 약수 개수를 저장할 배열
    let cnt = new Array(number).fill(0);
    
    // 약수 개수 계산
    for (let i = 0; i < number; i++) {
        let divisorsCount = 0;
        for (let k = 1; k <= Math.sqrt(i + 1); k++) {
            if ((i + 1) % k === 0) {
                if (k === (i + 1) / k) {
                    divisorsCount++; // 제곱근일 때
                } else {
                    divisorsCount += 2; // 서로 다른 약수일 때
                }
            }
        }
        cnt[i] = divisorsCount;
    }

    cnt = cnt.map(element => {
        if (element > limit) {
            return power;
        }
        return element;
    });

    // 배열의 합 계산
    let result = cnt.reduce((a, e) => a + e, 0);
    
    return result;
}
