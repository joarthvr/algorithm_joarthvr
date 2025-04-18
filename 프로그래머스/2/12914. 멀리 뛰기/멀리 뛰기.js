function solution(n) {
   const memo = [1,2];  
    
   for(let i = 2; i < n; i++){
        memo[i] = (memo[i-1] + memo[i-2]) % 1234567;
   }
    return memo[n-1];
}