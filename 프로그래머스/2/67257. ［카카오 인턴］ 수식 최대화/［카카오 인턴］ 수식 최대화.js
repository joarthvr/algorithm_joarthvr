function solution(expression) {
    // 1. 파싱: 숫자와 연산자 분리
    const nums = [];
    const ops = [];
    let temp = '';
    
    for (let char of expression) {
        if ('+-*'.includes(char)) {
            nums.push(+temp);
            ops.push(char);
            temp = '';
        } else {
            temp += char;
        }
    }
    nums.push(+temp);
    
    // 2. 고유 연산자 추출
    const uniqueOps = [...new Set(ops)];
    let maxResult = 0;
    
    // 3. 백트래킹으로 순열 생성하면서 바로 계산
    const current = [];
    const used = new Array(uniqueOps.length).fill(false);
    
    function backtrack() {
        // 순열 완성 시 계산
        if (current.length === uniqueOps.length) {
            const result = calculate(current);
            maxResult = Math.max(maxResult, result);
            return;
        }
        
        // 모든 연산자 시도
        for (let i = 0; i < uniqueOps.length; i++) {
            if (used[i]) continue;
            
            // 선택
            current.push(uniqueOps[i]);
            used[i] = true;
            
            // 재귀 호출
            backtrack();
            
            // 되돌리기 (백트래킹의 핵심!)
            current.pop();
            used[i] = false;
        }
    }
    
    // 4. 우선순위에 따른 계산 함수
    function calculate(priority) {
        let numbers = [...nums];
        let operators = [...ops];
        
        // 우선순위가 높은 연산자부터 처리
        for (let op of priority) {
            for (let i = 0; i < operators.length; i++) {
                if (operators[i] === op) {
                    let result;
                    if (op === '+') result = numbers[i] + numbers[i + 1];
                    else if (op === '-') result = numbers[i] - numbers[i + 1];
                    else result = numbers[i] * numbers[i + 1];
                    
                    // 계산 결과로 배열 업데이트
                    numbers.splice(i, 2, result);
                    operators.splice(i, 1);
                    i--; // 인덱스 조정
                }
            }
        }
        return Math.abs(numbers[0]);
    }
    
    // 백트래킹 시작
    backtrack();
    return maxResult;
}