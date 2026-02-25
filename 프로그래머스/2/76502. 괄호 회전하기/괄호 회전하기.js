function solution(s) {
    let result = 0;
    s = s.split("");
    const arrs = [];
    
    // 1. 왼쪽 회전 배열 생성 (O(N^2))
    for(let i = 0; i < s.length; i++){
        const front = s.shift();
        s.push(front);
        arrs.push([...s]);  // ✅ 복사본 저장
    }
    
    // 2. 각 배열 유효성 검사
    for(const rotated of arrs){
        const stack = [];
        let valid = true;
        
        for(const char of rotated){  // ✅ char 사용
            if(char === '(' || char === '[' || char === '{'){
                stack.push(char);
            } else {
                if(stack.length === 0){  // ✅ 빈 스택에 닫는 괄호 → 무효
                    valid = false;
                    break;
                }
                const top = stack.pop();  // ✅ pop 후 매칭 확인
                if((char === ')' && top !== '(') ||
                   (char === ']' && top !== '[') ||
                   (char === '}' && top !== '{')){
                    valid = false;
                    break;
                }
            }
        }
        if(valid && stack.length === 0) result++;  // ✅ 완전 매칭
    }
    return result;
}
