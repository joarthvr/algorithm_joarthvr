function solution(numbers) {
    const n = numbers.split("");
    const len = n.length;
    function isPrime(num){
        if(num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false
        }
        return true
    }
    function dfs(node, visited, arr, basket){
        if(arr.length > 0) {
            const num = Number(arr.join(""));
            if(isPrime(num)) basket.add(num);
        };
        visited[node] = true;
         for(let i = 0 ; i < len; i++){
            if(!visited[i]) {
                const tmp = [...arr];
                tmp.push(n[i]);
                dfs(i,visited, tmp, basket);
                visited[i]=false;
            }
        }
    }
    const set = new Set()
    for(let i = 0 ; i < len; i++){
        const visited = new Array(len).fill(false);
        dfs(i,visited, [n[i]], set);
    }
    return set.size;
}



