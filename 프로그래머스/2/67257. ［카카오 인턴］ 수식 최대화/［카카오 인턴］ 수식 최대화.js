function solution(expression) {
    //연산자와 숫자 분리
    let tmp = ''
    const ops = [];
    const nums = [];
    for(let char of expression){
        if('+-*'.includes(char)){
            ops.push(char);
            nums.push(Number(tmp));
            tmp = '';
        }
        else{
            tmp += char;
        }
    }
    nums.push(+tmp);
    
    //op 종류
    const uniqueOps = [...new Set(ops)];
    
    //백트래킹
    const visited = new Array(uniqueOps.length).fill(false);
    const current = [];
    
    let resultMax = 0;
    
    function backtrack(){
        if(current.length === uniqueOps.length){
            const m = calculate(current)
            resultMax = Math.max(m, resultMax);
            return;
        }
        for(let i = 0; i < uniqueOps.length; i++){
            if(visited[i]) continue;
            current.push(uniqueOps[i]);
            visited[i] = true;
            backtrack();
            current.pop();
            visited[i] = false;
        }
    }
   
    
    function calculate(priority) {
        let numbers = [...nums];
        let operators = [...ops];
        
        for(let op of priority){
            for(let i = 0; i < operators.length; i++){ 
                if(op === operators[i]){
                    let result = 0;
                    if(op === '+') result = numbers[i] + numbers[i + 1];
                    else if(op === '-') result = numbers[i] - numbers[i + 1];
                    else if(op === '*') result = numbers[i] * numbers[i + 1];
                    numbers.splice(i, 2, result);
                    operators.splice(i,1);
                    i--;
            }
        }
    }
        return Math.abs(numbers[0]);
}
    backtrack();
    return resultMax;
}