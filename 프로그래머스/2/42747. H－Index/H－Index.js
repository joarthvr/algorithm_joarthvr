function solution(citations) {
    citations = citations.sort((a,b) => a-b);
    const n = citations.length;
    
    for(let i = 0; i < n; i++) {
        if(citations[i] >= n-i) {
            return n-i;
        }
    }
    return 0;
}