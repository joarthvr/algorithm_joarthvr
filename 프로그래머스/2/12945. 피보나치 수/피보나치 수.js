function solution(n) {
    const memo = [];
    for(let i = 0; i <=n; i++){
        if(i <= 1) {
            memo[i] = i
        }
        else{
            memo[i] = (memo[i-2] + memo[i-1]) % 1234567;
        }
    }
    return memo[n];
}
