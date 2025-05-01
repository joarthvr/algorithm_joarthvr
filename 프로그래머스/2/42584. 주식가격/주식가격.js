function solution(prices) {
    const result = Array(prices.length).fill(0);
    const stack = [];
    let len = prices.length;
    for(let i = 0; i < len; i++){
        let top = prices[stack[stack.length-1]];
        while(stack.length > 0 && top > prices[i]){
            let t = stack.pop();
            result[t] = i - t;
            top = prices[stack[stack.length-1]];
        }
        stack.push(i);
    }
    len = len -1;
    
    for(let i = stack.length-1; i >= 0; i--){
        let stackTop = stack.pop();
        result[stackTop] = len - stackTop;
    }
    return result;
}