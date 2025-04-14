function solution(number, k) {
    const stack = [];
    let removed = 0;
    
    for (let i = 0; i < number.length; i++) {
        const current = number[i];
        
        // 스택이 비어있지 않고, 현재 숫자가 스택의 top보다 크고, 아직 k개를 제거하지 않았다면
        while (stack.length > 0 && stack[stack.length - 1] < current && removed < k) {
            stack.pop(); // 스택의 top 제거
            removed++;
        }
        
        stack.push(current);
    }
    
    // k개를 모두 제거하지 못한 경우 (모든 숫자가 내림차순인 경우)
    // 예: "9876543"에서 k=2인 경우, 위 로직으로는 제거할 숫자가 없음
    // 따라서 뒤에서부터 남은 k개를 제거
    while (removed < k) {
        stack.pop();
        removed++;
    }
    
    return stack.join('');
}