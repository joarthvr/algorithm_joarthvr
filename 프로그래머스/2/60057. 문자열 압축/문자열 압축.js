function solution(s) {
    let minLength = s.length;  // 압축 안 된 경우 (최대값)
    
    // 1부터 s.length/2까지 모든 단위 길이 시도
    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        let compressed = "";
        let count = 1;
        let prev = s.slice(0, unit);  // 첫 번째 패턴
        
        // unit 길이씩 잘라가며 비교
        for (let i = unit; i < s.length; i += unit) {
            const current = s.slice(i, i + unit);
            
            if (prev === current) {
                count++;
            } else {
                // 이전 패턴 처리
                compressed += (count > 1 ? count : "") + prev;
                prev = current;
                count = 1;
            }
        }
        
        // 마지막 패턴 처리
        compressed += (count > 1 ? count : "") + prev;
        
        minLength = Math.min(minLength, compressed.length);
    }
    
    return minLength;
}