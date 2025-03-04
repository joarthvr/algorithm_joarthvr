function solution(fees, records) {
    const parkingMap = new Map(); // 주차 중인 차량 정보 (차량번호 -> 입차시간)
    const feeMap = new Map();     // 차량별 누적 주차 시간 (차량번호 -> 시간)
    
    // 요금 계산 함수
    function calculateFee(minutes) {
        if (minutes <= fees[0]) {
            return fees[1]; // 기본 요금
        } else {
            return fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3]; // 기본 요금 + 추가 요금
        }
    }
    
    // 시간 문자열을 분으로 변환
    function timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    }
    
    // 모든 입/출차 기록 처리
    for (const record of records) {
        const [time, carNumber, type] = record.split(' ');
        
        if (type === 'IN') {
            parkingMap.set(carNumber, time);
        } else if (type === 'OUT') {
            const inTime = parkingMap.get(carNumber);
            const parkingTime = timeToMinutes(time) - timeToMinutes(inTime);
            
            feeMap.set(carNumber, (feeMap.get(carNumber) || 0) + parkingTime);
            parkingMap.delete(carNumber);
        }
    }
    
    // 출차 기록이 없는 차량 처리
    for (const [carNumber, inTime] of parkingMap) {
        const parkingTime = timeToMinutes('23:59') - timeToMinutes(inTime);
        feeMap.set(carNumber, (feeMap.get(carNumber) || 0) + parkingTime);
    }
    
    // 차량 번호 순으로 정렬하여 요금 계산
    return [...feeMap.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([carNumber, minutes]) => calculateFee(minutes));
}