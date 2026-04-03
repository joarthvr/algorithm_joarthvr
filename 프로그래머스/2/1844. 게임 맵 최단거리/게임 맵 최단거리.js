function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length:n}, ()=>Array(m).fill(false));
    const q = [[0,0,1]];
    let idx = 0;
    const d = [[0,1],[0,-1],[1,0],[-1,0]];
    while(idx < q.length){
        const [cR,cC,dist] = q[idx++];
        if(cR === n - 1 && cC === m - 1) return dist;
        visited[cR][cC] = true;
        for(const [dR,dC] of d){
            const nR = cR + dR;
            const nC = cC + dC;
            if(nR >= n || nR < 0 || nC >= m || nC < 0 || maps[nR][nC] === 0) continue; 
            if(!visited[nR][nC]){
                visited[nR][nC] = true;
                q.push([nR,nC, dist + 1]);
            }
        }
    }
    return -1;
}
