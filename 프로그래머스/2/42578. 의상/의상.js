function solution(clothes) {
    const clothesMap = {};
    
    // 카테고리별 의상 개수 계산
    for(let i = 0; i < clothes.length; i++){
        const category = clothes[i][1];
        if(clothesMap[category]){
            clothesMap[category]++;
        } else {
            clothesMap[category] = 1;
        }
    }
    
    // 모든 조합 계산: (각 카테고리 아이템 수 + 1)을 모두 곱한 후 1 빼기
    const values = Object.values(clothesMap);
    let answer = 1;
    for(let i = 0; i < values.length; i++){
        answer *= (values[i] + 1); // +1은 해당 카테고리에서 아무것도 선택하지 않는 경우
    }
    
    return answer - 1; // -1은 모든 카테고리에서 아무것도 선택하지 않는 경우(최소 1개는 입어야 함)
}