function solution(places) {
    const result = [];
    
    // 각 대기실별로 체크
    for (const place of places) {
        result.push(checkDistancing(place) ? 1 : 0);
    }
    
    return result;
}

function checkDistancing(place) {
    // 모든 사람(P) 위치 찾기
    const people = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (place[i][j] === 'P') {
                people.push([i, j]);
            }
        }
    }
    
    // 모든 사람 쌍에 대해 거리두기 체크
    for (let i = 0; i < people.length; i++) {
        for (let j = i + 1; j < people.length; j++) {
            const [r1, c1] = people[i];
            const [r2, c2] = people[j];
            
            // 맨해튼 거리 계산
            const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
            
            // 거리가 2 이하면 파티션 체크 필요
            if (distance <= 2) {
                if (!hasPartition(place, people[i], people[j])) {
                    return false; // 거리두기 위반
                }
            }
        }
    }
    
    return true; // 모든 조건 만족
}

function hasPartition(place, person1, person2) {
    const [r1, c1] = person1;
    const [r2, c2] = person2;
    
    const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
    
    // 거리 1: 인접한 경우 (무조건 위반)
    if (distance === 1) {
        return false;
    }
    
    // 거리 2: 파티션이 있는지 체크
    if (distance === 2) {
        // 같은 행 (가로로 인접)
        if (r1 === r2) {
            const midCol = Math.min(c1, c2) + 1;
            return place[r1][midCol] === 'X'; // 중간에 파티션 있어야 함
        }
        
        // 같은 열 (세로로 인접)
        if (c1 === c2) {
            const midRow = Math.min(r1, r2) + 1;
            return place[midRow][c1] === 'X'; // 중간에 파티션 있어야 함
        }
        
        // 대각선 (L자 모양)
        // 두 경로 모두 막혀있어야 함
        const path1Blocked = place[r1][c2] === 'X';
        const path2Blocked = place[r2][c1] === 'X';
        return path1Blocked && path2Blocked;
    }
    
    return true; // 거리 3 이상은 안전
}
