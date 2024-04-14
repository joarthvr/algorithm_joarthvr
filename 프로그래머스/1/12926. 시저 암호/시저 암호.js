function solution(s, n) {
    var answer = '';
    let char = '';
    let k = 0;
    for(let i = 0; i < s.length; i++){
        char = s[i];
        k = char.charCodeAt() + n;
        if(char.charCodeAt() > 64 && char.charCodeAt() < 91){
            if(k>90){
                answer += String.fromCharCode(k-26);
            }
            else{
                answer += String.fromCharCode(k);
            }
        }
        else if(char.charCodeAt() > 96 && char.charCodeAt() < 123){
           
           if(k>122){
                answer += String.fromCharCode(k-26);
            }
            else{
                answer += String.fromCharCode(k);
            } 
        }else{
            answer += s[i];
        }
    }
    return answer;
}
