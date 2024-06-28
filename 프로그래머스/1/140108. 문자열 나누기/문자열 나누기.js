function solution(s) {
    let check = 0;
    let first = s[0];
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        if(first === s[i]){
            check++;
        }
        else if(first !== s[i]){
            check--;
        }
        if(check === 0){
            result++;
            check = 0;
            first = s[i+1]
            continue
        }
        if(check >=1 && i === s.length -1)
            result++;
    }
    return result;
}