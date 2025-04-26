function solution(numbers, target) {
    let answer = 0;
    const stack = [{index: 0, sum: 0}];
    
    while (stack.length > 0) {
        const {index, sum} = stack.pop();
        
        if (index === numbers.length) {
            if (sum === target) answer++;
            continue;
        }
        
        // 빼기 경우
        stack.push({index: index + 1, sum: sum - numbers[index]});
        // 더하기 경우
        stack.push({index: index + 1, sum: sum + numbers[index]});
    }
    
    return answer;
}