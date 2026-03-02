function solution(progresses, speeds) {
    const result = [];
    const len = progresses.length;
    const expectedDays = [];
    for(let i = 0; i < len; i++){
        const expectedDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        expectedDays.push(expectedDay);
    }
    
    while(expectedDays.length > 0){
        const front = expectedDays.shift();
        let idx = 1;
        while(front >= expectedDays[0]){
            idx++;   
            expectedDays.shift();
        }
        result.push(idx);
    }
    return result;
}