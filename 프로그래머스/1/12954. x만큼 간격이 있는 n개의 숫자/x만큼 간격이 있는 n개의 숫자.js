function solution(x, n) {
    var answer = [];
    let j = 1;
    for(let i = 0; i < n; i++){
        answer[i] = x * j;
        j++;
    }
    return answer;
}