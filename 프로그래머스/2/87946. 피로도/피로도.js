
 function dfs(k, dungeons, explored = []){
    let maxExplored = explored.length;
   for(let i = 0; i < dungeons.length; i++){
        if(k >= dungeons[i][0]){
            let newK = k - dungeons[i][1];
            const newDungeons = dungeons.filter((_, index) => index !== i);
            const newExplored =[...explored, dungeons[i]];
            dfs(newK, newDungeons, newExplored);
            const result = dfs(newK, newDungeons, newExplored);
            maxExplored = Math.max(maxExplored, result);
        }
   }
     return maxExplored;
}

function solution(k, dungeons) {
   return dfs(k, dungeons);
    
}
