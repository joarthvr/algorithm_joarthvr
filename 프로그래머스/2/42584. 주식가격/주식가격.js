function solution(prices) {
    const len = prices.length;
    const result = Array(len).fill(0);
    const stack = []; // [index, price]
    
    for(let i = 0; i < len; i++) {
        // 스택에 있는 이전 가격들 중 현재 가격보다 큰 것들 처리
        while(stack.length && prices[i] < prices[stack[stack.length-1]]) {
            const prevIdx = stack.pop();
            result[prevIdx] = i - prevIdx;
        }
        stack.push(i);
    }
    
    // 스택에 남아있는 가격들 처리 (끝까지 가격이 떨어지지 않은 경우)
    while(stack.length) {
        const prevIdx = stack.pop();
        result[prevIdx] = len - 1 - prevIdx;
    }
    
    return result;
}