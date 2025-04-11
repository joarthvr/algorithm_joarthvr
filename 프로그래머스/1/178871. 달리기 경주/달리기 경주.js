function solution(players, callings) {
    // 선수 이름 -> 위치 매핑
    const playerToIndex = {};
    
    // 초기 위치 저장
    for (let i = 0; i < players.length; i++) {
        playerToIndex[players[i]] = i;
    }
    
    for (const name of callings) {
        // 호출된 선수의 현재 위치
        const currentIdx = playerToIndex[name];
        
        if (currentIdx > 0) {
            // 앞 선수의 이름
            const frontPlayer = players[currentIdx - 1];
            
            // 위치 교환
            players[currentIdx - 1] = name;
            players[currentIdx] = frontPlayer;
            
            // 위치 정보 업데이트
            playerToIndex[name] = currentIdx - 1;
            playerToIndex[frontPlayer] = currentIdx;
        }
    }
    
    return players;
}