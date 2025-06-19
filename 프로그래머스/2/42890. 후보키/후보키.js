function solution(relation) {
    const [rows, cols] = [relation.length, relation[0].length];
    const keys = [];
    
    // 모든 속성 조합 시도
    for (let mask = 1; mask < (1 << cols); mask++) {
        // 유일성 검사
        const set = new Set();
        let unique = true;
        
        for (const row of relation) {
            let key = "";
            for (let i = 0; i < cols; i++) {
                if (mask & (1 << i)) key += row[i] + "|";
            }
            if (set.has(key)) {
                unique = false;
                break;
            }
            set.add(key);
        }
        
        if (!unique) continue;
        
        // 최소성 검사  
        let minimal = true;
        for (const existingKey of keys) {
            if ((existingKey & mask) === existingKey) {
                minimal = false;
                break;
            }
        }
        
        if (minimal) keys.push(mask);
    }
    
    return keys.length;
}