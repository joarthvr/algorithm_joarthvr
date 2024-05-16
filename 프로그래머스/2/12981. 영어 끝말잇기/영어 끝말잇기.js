function solution(n, words) {
    let cnt = 0;
    let person = 1;
    let past = [];
    for(let i = 0; i < words.length; i++){
        if(i % n === 0)
            cnt++;
        person = (i % n) + 1; // 참가자 번호 계산 수정
         if(i > 0 && words[i-1][words[i-1].length-1] !== words[i][0]){
            return [person, cnt];
        }
        if(past.includes(words[i])){
            return [person, cnt];

        }
        past.push(words[i]);
    }
     return[0,0]
}