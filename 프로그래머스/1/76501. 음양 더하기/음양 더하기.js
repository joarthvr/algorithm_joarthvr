function solution(absolutes, signs) {
    return absolutes.reduce((sum, e, i) => {  // 여기서 i는 reduce에서 제공하는 인덱스
        if (signs[i]) {
            return sum + e;  // signs[i]가 true면 e를 더함
        } else {
            return sum - e;  // signs[i]가 false면 e를 뺌
        }
    }, 0);  // 초기값 0
}