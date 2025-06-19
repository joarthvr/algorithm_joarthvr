function solution(relation) {
    const col = relation[0].length;
    const keySet = new Set();
    const candidateKeys = [];
    
    // 1. 모든 컬럼 조합 생성 (비트마스크 활용)
    for (let i = 1; i < (1 << col); i++) {
        // 2. 최소성 체크 (이미 후보키로 등록된 부분집합이면 패스)
        let isMinimal = true;
        for (const key of candidateKeys) {
            if ((key & i) === key) {
                isMinimal = false;
                break;
            }
        }
        if (!isMinimal) continue;
        
        // 3. 유일성 체크
        keySet.clear();
        let isUnique = true;
        for (const row of relation) {
            let keyStr = '';
            for (let j = 0; j < col; j++) {
                if (i & (1 << j)) {
                    keyStr += row[j] + '|';
                }
            }
            if (keySet.has(keyStr)) {
                isUnique = false;
                break;
            }
            keySet.add(keyStr);
        }
        if (isUnique) {
            candidateKeys.push(i);
        }
    }
    
    return candidateKeys.length;
}
