function solution(n, k) {
    const result = [];
    const numbers = []; // 사용할 수 있는 숫자들
    let factorial = 1; 
    
    // 1부터 n까지 숫자 배열과 (n-1)! 계산
    for(let i = 1; i <= n; i++) {
        numbers.push(i);
        if(i < n) factorial *= i; // (n-1)!
    }
    
    k--; // 0-based 인덱스로 변환
    
   
    //각 자리수 결정
    for(let i = 0; i < n; i++){
        let num = Math.floor(k / factorial);
        result.push(numbers[num]);
        numbers.splice(num,1);
        
        k = k - factorial * num;
        factorial = factorial / numbers.length;
    }
    return result;
}