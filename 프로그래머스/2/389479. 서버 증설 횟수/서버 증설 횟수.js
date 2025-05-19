function solution(players, m, k) {
    //m명 늘어날 때마다 서버 1대가 추가로 필요
    //m명 미만이라면 서버 증설이 필요하지 않음
    //하나 증가하면 개수 카운트 증설된 서버느 k가 지나면 소멸
    
    const serverArr = [];
    let result = 0;
    for(let i = 0; i < players.length; i++){
        const player = players[i];
        if(i >= k-1){
             serverArr[i-k] = 0; // 갱신
        }
        const serverCnt = serverArr.reduce((accu, curr) => accu += curr,0);
        const neededServer = Math.floor(players[i] / m);
        const serverDiff = neededServer - serverCnt;
        
        if(serverCnt < neededServer) {
            result += serverDiff;
            serverArr[i] = serverDiff;
        }
        else{
            serverArr[i] = 0;
        }
        // console.log(i,serverArr, serverCnt, result)
        
    }
    return result;
  
}