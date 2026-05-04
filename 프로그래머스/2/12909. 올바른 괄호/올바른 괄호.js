function solution(s) {
    const stack = [];
    for (const c of s) {
        if (c === '(') stack.push(c);
        else {
            if (stack.length === 0) return false; 
            stack.pop();
        }
    }
    console.log(1)
    return stack.length === 0;
}