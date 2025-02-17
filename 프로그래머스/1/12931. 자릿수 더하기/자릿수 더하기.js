function solution(n){
    //1. 각 자리수의 자연수를 구한다
    //2. 구한 자연수를 모두 더한다 
    
    let sum = 0;
    n = n + "";
    console.log(n.split(""));
    
    for(let i = 0; i < n.length; i++){
        sum += Math.floor(n[i]);
    }
    
    return sum;
}