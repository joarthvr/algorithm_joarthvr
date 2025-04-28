function solution(n, t, m, p) {
    let answer = '';
    let numbers = '';
    let num = 0;
    
    // 필요한 길이만큼만 진법 변환 문자열 생성
    while (numbers.length < t * m) {
        numbers += num.toString(n).toUpperCase();
        num++;
    }
    
    // 튜브의 순서에 해당하는 문자만 추출
    for (let i = 0; i < t; i++) {
        answer += numbers[p - 1 + i * m];
    }
    
    return answer;
}