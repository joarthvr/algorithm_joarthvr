function solution(s) {
    var answer = '';
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            cnt = 0;
             answer += ' ';
            continue;
        }
        if(cnt % 2 === 0){
            answer += s[i].toUpperCase();
            cnt++;
            continue;
        }
        if(cnt % 2 === 1){
            answer += s[i].toLowerCase();
            cnt++;
            continue;
        }
    }
    return answer;
}

//전부 분리
//공백이면 세는 거 0으로 초기화
//철자면 홀수인지 짝수인지 확인 후 어퍼 로어 케이스