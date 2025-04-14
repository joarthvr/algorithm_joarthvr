function solution(numbers) {
    // 숫자를 문자열로 변환
    const strNumbers = numbers.map(num => num.toString());
    
    // 두 수를 이어붙였을 때 더 큰 수가 되는 순서로 정렬
    strNumbers.sort((a, b) => {
        return (b + a) - (a + b);
    });
    
    // 모든 숫자가 0인 경우 (예: [0, 0, 0]) "0"을 반환
    if (strNumbers[0] === '0') {
        return '0';
    }
    
    // 정렬된 숫자들을 이어붙여 반환
    return strNumbers.join('');
}