function solution(n) {
    const MOD = 1000000007;
    const result = [1,2];
    if(n === 1) return result[1];
    if(n === 2) return result[2];
    
    for(let i = 2; i<n; i++){
        result[i] = (result[i-2] + result[i-1]) % MOD
    }
    return result[n-1];
}