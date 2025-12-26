function solution(num) {
    var answer = 0;
    for (var i = 1; i <= num; i++) {
        if ((num % i == 0) && (i % 2 == 1)) {
            answer++;
        }
    }
    return answer;
}