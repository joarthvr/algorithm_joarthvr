function solution(plans) {
    //1. 시간 -> 분으로 교체
    plans = plans.map((plan) => {
        const [h, m] = plan[1].split(':');
        return [plan[0], Number(h) * 60 + Number(m), Number(plan[2])];
    }).sort((a,b) => a[1] - b[1]);
    
    //2. 주요 로직 스택 시뮬레이션
    const stack = []; // 이름, 남은 시간
    const result = [];
    
    for(let i = 0; i < plans.length; i++){
         const [currName, currTime, currDuration] = plans[i]
        if(i === plans.length - 1){
            result.push(currName)
            while(stack.length > 0){
                result.push(stack.pop()[0]);
            }
        }
        else {
            const nextTime = plans[i + 1][1];
            let availableTime = nextTime - currTime;
                if(currDuration <= availableTime){
                    result.push(currName);
                    availableTime -= currDuration;
                    while(stack.length > 0 && availableTime > 0){
                        let [pausedName, pausedTime] = stack.pop();
                        if(pausedTime <=availableTime){
                            result.push(pausedName);
                            availableTime -= pausedTime;
                        }
                        else{
                            pausedTime -= availableTime;
                            stack.push([pausedName, pausedTime]);
                            availableTime = 0;
                        }
                    } 
                }
            else{
                stack.push([currName, currDuration - availableTime]);
            }
        }
        
    }
    return result;
}