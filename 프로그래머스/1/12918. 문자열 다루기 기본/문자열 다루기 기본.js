function solution(s) {
    const len = s.length;
    if(len !== 4 && len !== 6) return false;
    if(len === 4 || len === 6){
         s = s.split("");
        for(let i = 0; i < len; i++){
            if(s[i].charCodeAt() >= 65) return false;
        }
    }
    return true;
}