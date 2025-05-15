function solution(storey) {
    let count = 0;
    
    while (storey > 0) {
        const digit = storey % 10;  // 마지막 자리
        
        if (digit > 5 || (digit === 5 && Math.floor(storey/10)%10 >= 5)) {
            count += (10 - digit);  // 올림
            storey = Math.floor(storey / 10) + 1;
        } else {
            count += digit;  // 내림
            storey = Math.floor(storey / 10);
        }
    }
    
    return count;
}