function solution(p) {
    // 1. 빈 문자열 처리
    if(p === "") {
        return "";
    }
    
    // 2. 균형잡힌 괄호 문자열 u, v로 분리
    const splitP = (str) => {
        let cnt1 = 0, cnt2 = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === '(') cnt1++;
            else if(str[i] === ')') cnt2++;
            
            // 균형이 맞는 첫 번째 지점에서 분리
            if(cnt1 > 0 && cnt2 > 0 && cnt1 === cnt2){
                const u = str.substring(0, i + 1);  // i+1까지 포함
                const v = str.substring(i + 1);     // i+1부터 끝까지
                return [u, v];
            }
        }
        return [str, ""];
    }
    
    // 3. 올바른 괄호 문자열인지 체크
    const isCorrect = (str) => {
        const stack = [];
        for(let i = 0; i < str.length; i++){
            if(str[i] === ')' && stack.length > 0 && stack[stack.length - 1] === '('){
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.length === 0;
    }
    
    // 4. 괄호 뒤집기 함수
    const reverse = (str) => {
        return str.split('').map(char => char === '(' ? ')' : '(').join('');
    }
    
    // 메인 재귀 로직
    const [u, v] = splitP(p);
    
    if(isCorrect(u)) {
        // 3. u가 올바른 괄호 문자열인 경우
        // 3-1. v에 대해 재귀 수행 후 u에 이어 붙이기
        return u + solution(v);
    } else {
        // 4. u가 올바른 괄호 문자열이 아닌 경우
        let result = "";
        
        // 4-1. '(' 붙이기
        result += "(";
        
        // 4-2. v에 대해 재귀 수행한 결과 붙이기
        result += solution(v);
        
        // 4-3. ')' 붙이기
        result += ")";
        
        // 4-4. u의 첫/마지막 문자 제거하고 나머지 괄호 뒤집어서 붙이기
        const uMiddle = u.substring(1, u.length - 1);  // 첫/마지막 문자 제거
        result += reverse(uMiddle);  // 괄호 방향 뒤집기
        
        return result;
    }
}