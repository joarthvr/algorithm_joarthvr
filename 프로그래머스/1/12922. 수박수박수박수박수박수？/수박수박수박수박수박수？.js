function solution(n) {
    var answer = '수';
    for(let i = 0; i < n -1; i++){
    if(answer[answer.length -1] === '수'){
        answer += '박';
    }
    else if(answer[answer.length -1] === '박'){
        answer += '수';
    }
    }
    return answer;
}

//배열의 인덱스가 홀수면 수 짝수면 박