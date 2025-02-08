function solution(n) {
    const moves = [];
    
    // 재귀적으로 원판을 움직이는 함수
    function hanoi(n, from, to, aux) {
        if (n === 1) {
            // 원판이 하나일 때는 직접 목적지로 이동
            moves.push([from, to]);
            return;
        }
        
        // n-1개의 원판을 보조 기둥으로 이동
        hanoi(n - 1, from, aux, to);
        
        // 가장 큰 원판을 목적지로 이동
        moves.push([from, to]);
        
        // n-1개의 원판을 보조 기둥에서 목적지로 이동
        hanoi(n - 1, aux, to, from);
    }
    
    // 1번 기둥에서 3번 기둥으로 n개의 원판을 이동
    hanoi(n, 1, 3, 2);
    
    return moves;
}


