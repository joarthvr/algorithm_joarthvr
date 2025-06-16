function solution(picks, minerals) {
    const [dia, iron, stone] = picks;
    const totalPicks = dia + iron + stone;
    
    // 실제로 캘 수 있는 광물만 고려
    const actualMinerals = minerals.slice(0, totalPicks * 5);
    
    // 5개씩 그룹으로 나누고 각 그룹의 비용 계산
    const groups = [];
    for (let i = 0; i < actualMinerals.length; i += 5) {
        const group = actualMinerals.slice(i, i + 5);
        
        // 돌 곡갱이로 캤을 때의 피로도 (정렬 기준)
        let stoneCost = 0;
        for (const mineral of group) {
            if (mineral === "diamond") stoneCost += 25;
            else if (mineral === "iron") stoneCost += 5;
            else stoneCost += 1;
        }
        
        groups.push({ minerals: group, cost: stoneCost });
    }
    
    // 비용이 높은 그룹부터 정렬
    groups.sort((a, b) => b.cost - a.cost);
    
    // 좋은 곡갱이부터 사용
    let totalFatigue = 0;
    let diaCount = dia, ironCount = iron, stoneCount = stone;
    
    for (const group of groups) {
        let pickType;
        if (diaCount > 0) {
            pickType = 0; // 다이아몬드 곡갱이
            diaCount--;
        } else if (ironCount > 0) {
            pickType = 1; // 철 곡갱이
            ironCount--;
        } else {
            pickType = 2; // 돌 곡갱이
            stoneCount--;
        }
        
        // 해당 곡갱이로 그룹의 광물들 채굴
        for (const mineral of group.minerals) {
            if (mineral === "diamond") {
                totalFatigue += [1, 5, 25][pickType];
            } else if (mineral === "iron") {
                totalFatigue += [1, 1, 5][pickType];
            } else { // stone
                totalFatigue += [1, 1, 1][pickType];
            }
        }
    }
    
    return totalFatigue;
}