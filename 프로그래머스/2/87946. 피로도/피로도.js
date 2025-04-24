function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let maxCount = 0;
    const dfs = (fatigue, count) => {
        maxCount = Math.max(maxCount, count);
        
        for(let i = 0; i < dungeons.length; i++){
            const [minFatigue, costFatigue] = dungeons[i];
            if(!visited[i] && fatigue >= minFatigue){
                visited[i] = true;
                dfs(fatigue - costFatigue, count + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    return maxCount;
}