function solution(begin, target, words) {
    const l = words.length
    const visited = new Array(l).fill(false);
    const q = [[begin,0]];
    let idx = 0;
    while(idx < q.length){
        const [cur,cI] = q[idx++];
        if(cur === target) return cI;
        for(let i = 0; i < l; i++){
            let diff = 0;
            if(!visited[i]){
                const candidate = words[i];
                for(let j = 0; j < begin.length; j++){
                    if(cur[j] !== candidate[j]) diff++;
                }
                if(diff === 1) {
                    visited[i] = true
                    q.push([candidate, cI + 1]);
                }
            }
        }
    }
    return 0;
}