function solution(prices) {
    const len = prices.length;
    const answer = new Array(len).fill(0);
    const stack = [];  // [index]만 저장
    
    for(let i = 0; i < len; i++) {
        // 현재 가격이 스택의 top 가격보다 작을 때
        while(stack.length && prices[stack[stack.length-1]] > prices[i]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }
    
    // 끝까지 가격이 떨어지지 않은 주식들
    while(stack.length) {
        const top = stack.pop();
        answer[top] = len - 1 - top;
    }
    
    return answer;
}