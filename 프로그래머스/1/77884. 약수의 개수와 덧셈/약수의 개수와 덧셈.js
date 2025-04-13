function solution(left, right) {
    const countDivisor = (num) => {
        let cnt = 0;  
       for(let i = 1; i <= Math.sqrt(num); i++){
           if(num % i === 0){
               if(num / i === i){
                   cnt++;
               }
               else{
                   cnt += 2;
               }
           }
       }
       return cnt;
   }
    let result = 0;
    for(let i = left; i <= right; i++){
        let cnt = countDivisor(i);
        cnt = cnt % 2 === 0 ? i : -1 * i;
        result += cnt;
    }
    return result;
   
}

