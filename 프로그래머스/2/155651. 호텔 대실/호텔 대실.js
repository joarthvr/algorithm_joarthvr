function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}
function solution(book_time) {
    // 시간을 분으로 변환
    const bookings = book_time.map(([start, end]) => {
        return [
            timeToMinutes(start),
            timeToMinutes(end) + 10 // 청소 시간 10분 추가
        ];
    });
    
    // 시작 시간 기준 정렬
    bookings.sort((a, b) => a[0] - b[0]);
    
    // 방 사용 종료 시간을 추적하는 배열 (최소 힙 역할)
    const rooms = [];
    
    for (const [start, end] of bookings) {
        // 가장 빨리 비는 방 확인
        if (rooms.length > 0 && rooms[0] <= start) {
            // 가장 빨리 비는 방 재사용
            rooms.shift(); // 최소값 제거
        }
        
        // 새 방 추가 또는 방 업데이트
        rooms.push(end);
        rooms.sort((a, b) => a - b); // 최소 힙 유지 (JavaScript에서는 정렬로 대체)
    }
    
    return rooms.length;
}