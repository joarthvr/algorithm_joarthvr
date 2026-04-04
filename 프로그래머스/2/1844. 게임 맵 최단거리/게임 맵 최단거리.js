function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const visited = Array.from({length : n},()=>Array(m).fill(false));
    const d = [[0,-1],[0,1],[-1,0],[1,0]];
    const q = [[0,0,1]];
    let ans = 1;
    visited[0][0] = true;
    let idx = 0;
    while(idx < q.length){
        let [cR,cC,cnt] = q[idx++];
        if(cR === n-1 && cC === m-1) return cnt;
        for(let i = 0; i < d.length; i++){
            const [dR, dC] = d[i];
            const [nR, nC] = [cR + dR, cC + dC];
            if(nR < 0 || nR >= n || nC < 0 || nC >= m || maps[nR][nC] === 0 || visited[nR][nC]) continue;
            visited[nR][nC] = true;
            q.push([nR, nC, cnt + 1]);
            
        }
    }
    
    return -1;
}
