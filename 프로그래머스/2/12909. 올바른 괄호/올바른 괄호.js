function solution(s) {
    const stack = [];
    s = s.split("");
    let ans = true;
    
    for(let i = 0; i < s.length; i++){
        const top = stack[stack.length-1];
        if(top === '(' && s[i] === ')'){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }
    console.log(stack);
    if(stack.length > 0) ans = false;
    return ans;
}


    
    
    
