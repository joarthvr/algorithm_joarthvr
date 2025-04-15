function solution(s) {
    // 1. 문자열 파싱: 외부 중괄호({})를 제거하고 각 집합을 추출
    s = s.substring(2, s.length - 2);
    const sets = s.split('},{').map(set => 
        set.split(',').map(Number)
    );
    
    // 2. 집합의 크기에 따라 정렬
    sets.sort((a, b) => a.length - b.length);
    
    // 3. 각 집합을 순회하면서 튜플 구성
    const result = [];
    const seen = new Set();
    
    for (const set of sets) {
        for (const num of set) {
            if (!seen.has(num)) {
                result.push(num);
                seen.add(num);
            }
        }
    }
    
    return result;
}