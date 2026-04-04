function solution(n, computers) {
    let ans = 0;
    const visited = new Array(n).fill(false);
    function dfs(node){
        visited[node] = true;
        for(let j = 0; j < n; j++){
            if(computers[node][j] === 1 && !visited[j]) dfs(j);
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            ans++;
            dfs(i);
        }
    }
    return ans;
}

