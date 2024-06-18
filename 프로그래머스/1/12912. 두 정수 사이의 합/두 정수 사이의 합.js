function solution(a, b) {
    if(a === b)
        return a;
    let tmp = [];
    tmp.push(a);
    tmp.push(b);
    tmp = tmp.sort((a,b) => a-b);
    let sum = 0;
    for(let i = tmp[0]; i <= tmp[1]; i++){
        sum += i;
    }
    return sum;
    
}
    
   