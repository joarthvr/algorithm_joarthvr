function solution(storey) {
    let count = 0;
    
    while (storey > 0) {
        const digit = storey % 10;  // 현재 자리수
        const nextDigit = Math.floor(storey / 10) % 10;  // 다음 자리수
        console.log(digit, nextDigit)
        if (digit > 5 || (digit === 5 && nextDigit >= 5)) {
            // 올림이 유리한 경우
            count += (10 - digit);
            storey = Math.floor(storey / 10) + 1;
        } else {
            // 내림이 유리한 경우
            count += digit;
            storey = Math.floor(storey / 10);
        }
    }
    
    return count;
}