function solution(order) {
    let result = 0;
    const stack = [];
    let orderIndex = 0;  // order 배열의 인덱스를 관리
    
    for(let i = 1; i <= order.length; i++) {
        stack.push(i);
        
        // 스택의 top이 현재 찾는 순서와 일치하면 처리
        while(stack.length && stack[stack.length-1] === order[orderIndex]) {
            stack.pop();
            orderIndex++;
            result++;
        }
    }
    
    return result;
}