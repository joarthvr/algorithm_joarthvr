function solution(k, ranges) {
    // 우박수열 생성
    const sequence = [];
    let n = k;
    
    while (n !== 1) {
        sequence.push(n);
        n = (n % 2 === 0) ? n / 2 : n * 3 + 1;
    }
    sequence.push(1);
    
    // 누적합 미리 계산 (최적화)
    const prefixSum = [0];
    for (let i = 0; i < sequence.length - 1; i++) {
        prefixSum.push(prefixSum[i] + (sequence[i] + sequence[i + 1]) / 2);
    }
    
    const maxIndex = sequence.length - 1;
    const results = [];
    
    for (const [a, b] of ranges) {
        const start = a;
        const end = maxIndex + b;
        
        if (start > end) {
            results.push(-1.0);
        } else {
            results.push(prefixSum[end] - prefixSum[start]);
        }
    }
    
    return results;
}