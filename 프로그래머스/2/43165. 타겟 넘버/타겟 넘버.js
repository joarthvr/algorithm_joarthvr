function solution(numbers, target) {
    let ans = 0;
    function dfs(node, sum){
        let s = sum;
        if(node === numbers.length){
           if(sum === target){
            ans++;
        }
            return;
        }
        s -= numbers[node];
        dfs(node + 1, s)  
        s += numbers[node] * 2;
        dfs(node + 1, s);
    }
    dfs(0,0);
    return ans;
}
