function solution(s) {
    if(s.length <4 || s.length > 6 || s.length === 5)
        return false;
    s = s.split("");
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])){
            return false;
        }
        if(isNaN(parseFloat(s[i]))){
            return false;
        }
    }
    return true;
}
