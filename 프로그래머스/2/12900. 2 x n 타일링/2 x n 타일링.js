function solution(n) {
    const MOD = 1000000007;
    
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    
    let prev = 1; 
    let curr = 2; 
    
    for (let i = 3; i <= n; i++) {
        
        const next = (prev + curr) % MOD;
        prev = curr;
        curr = next;
    }
    
    return curr;
}