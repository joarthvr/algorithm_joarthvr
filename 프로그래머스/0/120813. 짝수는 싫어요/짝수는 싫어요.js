function solution(n) {
    let odd = -1;
    let i = 0;
    var answer = [];
    if(n % 2 === 0){
        while(odd < n-1){
            odd = odd +2;
            answer[i] = odd;
            i++;
    }
    }
    else {
        while(odd < n){
        odd = odd +2;
        answer[i] = odd;
        i++;
       
    }
        }
    
   
     console.log(answer)
    return answer;
}