function solution(s){
    const stack = [];
    for(const char of s){
        if(stack.length !== 0){
            if(stack[stack.length - 1] === char){
                stack.pop();
                continue;
            }
        }
        stack.push(char);
    }
    return stack.length > 0 ? 0 : 1;
}