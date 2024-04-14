function solution(d, budget) {
    d = d.sort((a,b) => a-b);
    let sum = 0;
    let cnt = 0;
    for(let i = 0; i < d.length; i++){
        if(sum + d[i] <= budget){
            sum += d[i];
            cnt++;
        }
        
    }
    return cnt; 
   
}