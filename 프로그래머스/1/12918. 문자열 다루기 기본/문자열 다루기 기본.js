function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if(s.length === 4 || s.length === 6){
        // 문자열을 순회하면서 숫자가 아닌 문자가 있는지 확인
        for(let i = 0; i < s.length; i++){
            if(!(s[i] >= '0' && s[i] <= '9')){
                // 숫자가 아닌 문자를 발견한 경우 false 반환
                return false;
            }
        }
        // 모든 검사를 통과한 경우 true 반환
        return true;
    } else {
        // 문자열의 길이가 4 또는 6이 아닌 경우 false 반환
        return false;
    }
}
