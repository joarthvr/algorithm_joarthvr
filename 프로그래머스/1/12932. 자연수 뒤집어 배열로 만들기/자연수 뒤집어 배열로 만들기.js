function solution(n) {
    n = n + "";  // 숫자를 문자열로 변환
    let result = [];
    for (let i = n.length - 1; i >= 0; i--) {
        result.push(parseInt(n[i]));  // 뒤에서부터 숫자를 읽어 배열에 추가
    }
    return result;  // 뒤집힌 숫자 배열 반환
}
