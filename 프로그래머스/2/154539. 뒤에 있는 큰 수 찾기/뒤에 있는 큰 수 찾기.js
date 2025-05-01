function solution(numbers) {
     const result = Array(numbers.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        // 스택이 비어있지 않고, 스택의 top 인덱스의 값이 현재 값보다 작으면
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            // 해당 인덱스의 결과값을 현재 값으로 업데이트
            result[stack.pop()] = numbers[i];
        }
        
        // 현재 인덱스를 스택에 추가
        stack.push(i);
    }
    
    return result;
}