function solution(order) {
    const stack = [];
    let current = 0;
    let result = 0;
    for(let i = 1; i <= order.length; i++){
        if(order[current] === i){
            current++;
            result++;
            continue;
        }
        while(stack[stack.length-1] === order[current]){
            current++;
            result++;
            stack.pop();
        }
        stack.push(i);
    }
    while(stack.length > 0 && stack[stack.length-1] === order[current]){
            stack.pop();
            result++;
            current++;
    }
    
   return result;
}