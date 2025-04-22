function solution(s) {
    const isCorrectBrancket = (arr, startIndex) => {
        const stack = [];
        for(let i = 0; i < arr.length; i++){
            const index = (startIndex+i) % arr.length;
            if(stack.length > 0){
                const itemBefore = stack[stack.length-1];
                const item = arr[index];
                if(itemBefore === '{' && item === '}'){ 
                    stack.pop();
                    continue;
                }
                else if(itemBefore === '(' && item === ')' ){
                    stack.pop();
                    continue;
                }
                else if (itemBefore === '[' && item === ']') {
                    stack.pop();
                    continue;
                }
                stack.push(arr[index]);
                continue;
            }
                stack.push(arr[index]);
        }
        
        return stack.length > 0 ? false : true;
    }
    let result = 0;
    for(let i = 0; i < s.length; i++){
        result = isCorrectBrancket(s,i) ? result + 1 : result;    
    }
  
    return result;
}