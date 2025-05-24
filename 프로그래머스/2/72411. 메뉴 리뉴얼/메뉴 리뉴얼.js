const combination = (targetSize, map, order, current, startIdx) => {
    if(current.length === targetSize) {
        map[current] = (map[current] || 0) + 1;
        return;
    }
    for(let i = startIdx; i < order.length; i++){
        combination(targetSize, map, order, current + order[i], i + 1);
    }
    
}
function solution(orders, course) {
    let answer = [];
    
    //백트래킹을 활용한 조합
    //다음 => 현재 체킹 + i+1 현재가 코스에 맞으면 푸시
    //앤서에서 조건에 맞는지 검사
    
    
    for(const size of course){
        const comboMap = {};
        
        for(const order of orders){
            const sortedOrder = [...order].sort().join('');
            combination(size, comboMap, sortedOrder, "", 0);
        }
        let maxCount = 0;
        for(const combo in comboMap){
            if(comboMap[combo] >= 2 && comboMap[combo] > maxCount){
                maxCount = comboMap[combo];
            }
        }
        if(maxCount >= 2){
            for(const combo in comboMap){
                if(comboMap[combo] === maxCount){
                    answer.push(combo);
                }
            }
        }
        
    }
    
    return answer.sort();
}

