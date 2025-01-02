function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const stack = []; // [index, value]
    
    for(let i = 0; i < numbers.length; i++) {
        // 스택이 비어있지 않고, 현재 숫자가 스택의 top에 있는 숫자보다 크다면
        while(stack.length > 0 && numbers[i] > numbers[stack[stack.length-1]]) {
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return result;
}