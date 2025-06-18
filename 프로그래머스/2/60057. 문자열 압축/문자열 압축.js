function solution(s) {
    let min = s.length;
    
    for(let unit = 1; unit <= s.length / 2; unit++){
        let cnt = 1;
        let compressed = ""
        let prev = s.slice(0,unit);
        
        for(let i = unit; i < s.length; i+= unit){
            const curr = s.slice(i, i + unit);
            if(prev === curr){
                cnt++;
            }
            else {
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