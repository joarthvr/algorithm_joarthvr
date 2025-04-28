function solution(n, k) {
    const converted = n.toString(k).split("0").filter((e) => e !== '1');
    console.log(converted)
    let result = 0;
    for(let i = 0; i < converted.length; i++){
        let candidate = Number(converted[i]);
        
        if(candidate === 1 || candidate === 0) continue;
        if(candidate === 2){
            result++;
            continue;
        }
        let isPrime = true;
       
        for(let j = 3; j <= Math.sqrt(candidate); j++){
            if(candidate % j === 0) isPrime = false;
        }
        if(isPrime) result++
    }
    return result;
}

//소수를 찾고 
//조건에 맞는지 검사