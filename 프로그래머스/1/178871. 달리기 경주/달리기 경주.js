function solution(players, callings) {
    const playerToIdx = {};
    
    for(let i = 0; i < players.length; i++){
        playerToIdx[players[i]] = i;
    }
    
   for(const name of callings){
       let frontPlayer = players[playerToIdx[name] -1];
       
       //플레이어 배열 위치 교환
       players[playerToIdx[name]] = frontPlayer;
       players[playerToIdx[name] -1] = name;
       
       //플레이어 객체 인덱스 업데이트
       playerToIdx[name]--;
       playerToIdx[frontPlayer]++;
       
       
   }
    return players;
}