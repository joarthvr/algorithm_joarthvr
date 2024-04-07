function solution(k, m, score) {
    
    if(score.length < m)
        return 0;
    score = score.sort((a,b) => b-a);
    console.log(score)
    let result = 0;
    let i = score.length;
    let t = 0;
    let n = m-1;
    while(t<i){
        

        if(t === n){
            result += score[t] * m
            n += m;
            
        }
        t++;
    }
    return result;
}




