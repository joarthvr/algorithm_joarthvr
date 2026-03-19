function solution(brown, yellow) {
    const arr = [];
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow % i === 0) arr.push([i, yellow / i])
    }
    for(const [ls, bs] of arr){
        if(brown - bs * 2 < (ls + 2) * 2) continue;
        
        return [bs + 2, ls + 2]
        
    }
}


