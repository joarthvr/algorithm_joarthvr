function solution(s) {
      let min = s.length;
    
    for (let unit = 1; unit <= s.length / 2; unit++) {
        let compressed = "";
        let cnt = 1;
        let prev = s.substring(0, unit);
        
        for (let i = unit; i < s.length; i += unit) {
            let curr = s.substring(i, i + unit);
            if (prev === curr) {
                cnt++;
            } else {
                compressed += (cnt > 1 ? cnt : "") + prev;
                prev = curr;
                cnt = 1;
            }
        }
        compressed += (cnt > 1 ? cnt : "") + prev;
        min = Math.min(min, compressed.length);
    }
    
    return min;
}