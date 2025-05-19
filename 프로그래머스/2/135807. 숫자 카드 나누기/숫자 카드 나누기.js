// arrayA = 철수, arrayB = 영희
function solution(arrayA, arrayB) {
    // 1) 철수만 모든 숫자를 나눌수 있는 경우 
    let a = getDvsr(arrayA, arrayB);

    // 2) 영희만 모든 숫자를 나눌수 있는 경우 
    let b = getDvsr(arrayB, arrayA);
        
    return Math.max(a,b);
}
function getDvsr(arrayA, arrayB){
    let answer = 0;

    // 3) 최대 공약수를 구하는 재귀 함수
    const gcd =  (a, b) => a % b === 0 ? b : gcd(b, a % b);
    
    // 4) arrayA 배열에 담긴 값의 초대 공약수 구한다.
    arrayA.forEach(val => answer = gcd(answer, val));

    // 5) arrayB 배열의 값이 하나라도 arrayA의 최대 공약수로 나누어 진다면 0을 return 한다.
    if(arrayB.some(val => val%answer === 0)) return 0;
    
    // 6) 나누어지지 않으면 최대 공약수 return
    return answer;
}