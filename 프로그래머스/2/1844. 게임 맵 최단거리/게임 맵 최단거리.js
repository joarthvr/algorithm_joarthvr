function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const q = [];
    const visited = Array.from({length : n},()=>new Array(m).fill(false));
    q.push([0,0,1])
    visited[0][0] = true;
    let idx = 0;
    const d = [[1,0], [-1,0], [0,-1], [0,1]];
    
    while(idx < q.length){
        const [cN,cM,pt] = q[idx++];
        if(cN === n - 1 && cM === m - 1) return pt;
        for(let i = 0; i < d.length; i++){
            const [dN,dM] = d[i];
            const nN = cN + dN;  
            const nM = cM + dM;
            if( nM >= m || nM < 0 || nN >= n || nN < 0 || visited[nN][nM] || maps[nN][nM] === 0) continue;
            q.push([nN,nM,pt+1]);
            visited[nN][nM] = true;
        }
    }
 return -1;   
}