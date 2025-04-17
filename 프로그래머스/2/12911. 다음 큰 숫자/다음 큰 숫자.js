function solution(n) {
    // 2진수에서 1의 개수 계산
    const countOnes = (num) => {
        let count = 0;
        while (num > 0) {
            if (num & 1) count++; // 최하위 비트 확인
            num >>>= 1;           // 부호 없는 오른쪽 시프트
        }
        return count;
    };
    
    const nOnes = countOnes(n);
    let next = n + 1;
    
    while (countOnes(next) !== nOnes) {
        next++;
    }
    
    return next;
}