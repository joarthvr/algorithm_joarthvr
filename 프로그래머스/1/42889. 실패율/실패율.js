function solution(N, stages) {
    let myObject = {};
    
    for (let i = 1; i <= N; i++) {
        let moreThan = 0;
        let stopped = 0;
        
        for (let j = 0; j < stages.length; j++) {
            if (i <= stages[j]) {
                moreThan++;
            }
            if (i === stages[j]) {
                stopped++;
            }
        }
        
        // 실패율 계산
        let value = moreThan === 0 ? 0 : stopped / moreThan;
        myObject[i] = value;
    }
    
    // 객체를 배열로 변환하여 실패율 기준으로 정렬
    let result = Object.keys(myObject).sort((a, b) => {
        if (myObject[b] === myObject[a]) {
            return a - b; // 실패율이 같으면 스테이지 번호가 작은 순으로 정렬
        }
        return myObject[b] - myObject[a];
    }).map(Number); // 문자열을 숫자로 변환
    
    return result;
}
