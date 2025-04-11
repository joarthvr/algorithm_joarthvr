function solution(schedules, timelogs, startday) {
    // 출근 희망 시각에 10분 더하기
    schedules = schedules.map(time => {
        const hours = Math.floor(time / 100);
        const minutes = time % 100;
        
        // 10분 추가 후 시간 조정
        let newMinutes = minutes + 10;
        let newHours = hours;
        
        if (newMinutes >= 60) {
            newHours += 1;
            newMinutes -= 60;
        }
        
        return newHours * 100 + newMinutes;
    });
    
    // 요일 설정
    const week = [1, 2, 3, 4, 5, 6, 7];
    while (week[0] !== startday) {
        const front = week.shift();
        week.push(front);
    }
    
    let result = 0;
    
    // 각 직원별로 체크
    for (let j = 0; j < timelogs.length; j++) {
        const employeeLogs = timelogs[j];
        const employeeSchedule = schedules[j];
        
        let allDaysOnTime = true;
        
        // 일주일 체크
        for (let i = 0; i < 7; i++) {
            // 평일에만 체크
            if (week[i] <= 5) {  // 평일(1-5)
                if (employeeLogs[i] > employeeSchedule) {
                    allDaysOnTime = false;
                    break;
                }
            }
            // 주말은 체크하지 않음
        }
        
        if (allDaysOnTime) {
            result++;
        }
    }
    
    return result;
}