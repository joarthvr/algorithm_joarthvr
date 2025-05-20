function solution(n) {
    let answer = '';
    
    while(n > 0) {
        const remainder = n % 3;
        
        if(remainder === 0) {
            answer = '4' + answer;
            n = Math.floor(n/3) - 1; // 중요: 나머지가 0일 때 몫에서 1을 빼야 함
        } else if(remainder === 1) {
            answer = '1' + answer;
            n = Math.floor(n/3);
        } else { // remainder === 2
            answer = '2' + answer;
            n = Math.floor(n/3);
        }
    }
    
    return answer;
}