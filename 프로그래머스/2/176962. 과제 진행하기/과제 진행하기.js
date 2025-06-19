function solution(plans) {
    const tasks = plans.map(([name, time, duration]) => {
        const [h, m] = time.split(':').map(Number);
        return [name, h * 60 + m, Number(duration)];
    }).sort((a, b) => a[1] - b[1]);
    
    const stack = [];
    const result = [];
    
    for (let i = 0; i < tasks.length; i++) {
        const [name, start, duration] = tasks[i];
        
        if (i === tasks.length - 1) {
            // 마지막 과제
            result.push(name);
            while (stack.length > 0) {
                result.push(stack.pop()[0]);
            }
        } else {
            const nextStart = tasks[i + 1][1];
            const availableTime = nextStart - start;
            
            if (duration <= availableTime) {
                result.push(name);
                let remainingTime = availableTime - duration;
                
                // 중단된 과제들 처리 (LIFO)
                while (remainingTime > 0 && stack.length > 0) {
                    const [pausedName, pausedDuration] = stack.pop();
                    
                    if (pausedDuration <= remainingTime) {
                        result.push(pausedName);
                        remainingTime -= pausedDuration;
                    } else {
                        stack.push([pausedName, pausedDuration - remainingTime]);
                        remainingTime = 0;
                    }
                }
            } else {
                stack.push([name, duration - availableTime]);
            }
        }
    }
    
    return result;
}