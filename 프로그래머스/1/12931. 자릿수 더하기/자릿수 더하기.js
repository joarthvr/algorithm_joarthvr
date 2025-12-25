function solution(n){
    const len = String(n).length -1;
    
    let sum = 0;
    for(let i = len; i >= 0; i--){
        const pos = 10**i;
        const tmp = Math.floor(n / pos); 
        
        sum += tmp;
        n = n % pos;
    
    

    }
    return sum;
}