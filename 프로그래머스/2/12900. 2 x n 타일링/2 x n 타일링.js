function solution(n) {
    const MOD = 1000000007;
    let result = 0;
    let prev = 1;
    let curr = 2;
    if (n === 1) return 1;
    if (n === 2) return 2;
    for(let i = 3; i<=n; i++){
        result = (prev + curr) % MOD;
        prev = curr;
        curr = result;
    }
    return result
}