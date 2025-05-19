function solution(players, m, k) {
    // 각 시간에 증설한 서버 수를 저장
    const servers = new Array(24).fill(0);
    let totalSetups = 0;
    
    for (let hour = 0; hour < 24; hour++) {
        // 현재 시간에 운영 중인 서버 수 계산 (이전에 설치한 서버 중 아직 k시간이 지나지 않은 것들)
        let currentServers = 0;
        for (let prevHour = Math.max(0, hour - k + 1); prevHour < hour; prevHour++) {
            currentServers += servers[prevHour];
        }
        
        // 필요한 서버 수 계산 (n×m명 이상 (n+1)×m명 미만이면 n대 필요)
        const neededServers = Math.floor(players[hour] / m);
        
        // 추가로 필요한 서버 수 계산
        const additionalServers = Math.max(0, neededServers - currentServers);
        
        if (additionalServers > 0) {
            servers[hour] = additionalServers;
            totalSetups += additionalServers;
        }
    }
    
    return totalSetups;
}