function isPrime(num) {
    // 1 이하는 소수가 아님
    if (num <= 1) return false;
    
    // 2는 소수
    if (num === 2) return true;
    
    // 짝수는 소수가 아님 (2 제외)
    if (num % 2 === 0) return false;
    
    // 제곱근까지만 확인하면 됨
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    // k진수로 변환
    const K_JINSU = n.toString(k);
    
    // 0을 기준으로 분리
    const splitedArr = K_JINSU.split('0');
    
    // 각 숫자를 확인하여 소수 개수 카운트
    let count = 0;
    
    for (let numStr of splitedArr) {
        // 빈 문자열이나 공백은 건너뜀
        if (numStr.trim() === '') continue;
        
        // 문자열을 숫자로 변환하여 소수 판별
        const num = parseInt(numStr, 10);
        if (isPrime(num)) {
            count++;
        }
    }
    
    return count;
}