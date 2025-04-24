function solution(topping) {
    let count = 0;
    const len = topping.length;
    
    // 왼쪽과 오른쪽의 토핑 종류 개수를 미리 계산
    const leftMap = new Map();
    const rightMap = new Map();
    
    for(const t of topping){
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }
    
    for(let i = 0; i < len - 1; i++){
        const top = topping.pop();
        leftMap.set(top, (leftMap.get(top) || 0) + 1);
        
        rightMap.set(top, rightMap.get(top) -1);
        if(rightMap.get(top) === 0) rightMap.delete(top);
        
        if(leftMap.size === rightMap.size) count++;
    }
    return count;
}