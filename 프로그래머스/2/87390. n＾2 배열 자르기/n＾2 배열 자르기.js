function solution(n, left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);  // i를 n으로 나눈 몫이 행 번호
        const col = i % n;              // i를 n으로 나눈 나머지가 열 번호
        const value = Math.max(row, col) + 1;  // (row, col) 위치의 값
        
        result.push(value);
    }
    
    return result;
}