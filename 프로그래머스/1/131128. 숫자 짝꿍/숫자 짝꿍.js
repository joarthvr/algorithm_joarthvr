function solution(X, Y) {
    X = X.split("").sort((a,b)=>a-b);
    Y = Y.split("").sort((a,b)=>a-b);
   let result = [];
    
    //빈도수 계산하는 함수
   const frequencyCalc = (arr) => {
       const frequency = {};
       for(let i = 0; i < arr.length; i++){
           const char = arr[i];
          if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
       }
       return frequency;
   }
    frequencyCalc(X);
    frequencyCalc(Y);
    
    //키값만 가지고 있는 배열
    const keys = Object.keys(frequencyCalc(X));
    for(let i = 0 ; i < keys.length; i++){
        const keyToCompare = keys[i];
        const A = frequencyCalc(X)[keyToCompare];
        const B = frequencyCalc(Y)[keyToCompare];
        if(A && B){
             let min = Math.min(A , B);
                while(min--){
                    result.push(keyToCompare);
                }
        }
    }
    result = result.sort((a,b)=>b-a).join("");
    if(result[0] === '0') return result[0];
    return result.length <= 0 ?  "-1" :  result;
    
}

