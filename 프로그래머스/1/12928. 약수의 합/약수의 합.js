function solution(n) {
    let ans =[];
    let j = 0;
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            ans[j] = i;
            j++;
        }
    }
    ans.forEach((e) =>{ sum += e;})
       
    
    return sum;
}