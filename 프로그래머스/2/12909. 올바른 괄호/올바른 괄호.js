function solution(s){
    const stack = [];
    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        if(cur === ')' && stack[stack.length - 1] === ')') return false;
        if(cur === ')' && stack[stack.length - 1] === '('){
            stack.pop();
            continue;
        }
        stack.push(cur);
    }
    return stack.length === 0 ? true : false;
}