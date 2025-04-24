function solution(priorities, location) {
    // 각 프로세스의 우선순위와 인덱스를 저장
    const queue = priorities.map((priority, index) => ({ priority, index }));
    let count = 0;
    
    while (queue.length > 0) {
        // 큐의 맨 앞 프로세스를 꺼냄
        const current = queue.shift();
        
        // 큐에 남아있는 프로세스 중 우선순위가 더 높은 것이 있는지 확인
        if (queue.some(process => process.priority > current.priority)) {
            // 우선순위가 더 높은 프로세스가 있으면 현재 프로세스를 다시 큐에 넣음
            queue.push(current);
        } else {
            // 우선순위가 더 높은 프로세스가 없으면 실행
            count++;
            
            // 우리가 찾는 프로세스인 경우 count를 반환
            if (current.index === location) {
                return count;
            }
        }
    }
}