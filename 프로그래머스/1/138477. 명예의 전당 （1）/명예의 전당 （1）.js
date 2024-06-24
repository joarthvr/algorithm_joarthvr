function solution(k, score) {
    let honor = [];
    let result = [];
    for(let i = 0; i < score.length; i++){
        if(honor.length < k ){
            honor.push(score[i]);
            result.push(Math.min(...honor));
            honor.sort((a,b)=>b-a);
            console.log(honor)
            continue;
        }
        if(Math.min(...honor) <= score[i]){
            honor.pop();
            honor.push(score[i]);
            result.push(Math.min(...honor))
            honor.sort((a,b)=>b-a);
            console.log(honor)
            continue;
        }
        else{
            result.push(Math.min(...honor))
        }
        
    }
    return result;
   }