function solution(word) {
    const weight = [781, 156, 31, 6, 1];
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    let answer = 0;
    
    // 각 자리수별로 계산
    for (let i = 0; i < word.length; i++) {
        // 현재 문자가 몇번째 모음인지 찾기
        const vowelIndex = vowels.indexOf(word[i]);
        // 해당 자리수의 가중치를 곱하여 더함
        answer += vowelIndex * weight[i] + 1;
    }
    
    return answer;
}