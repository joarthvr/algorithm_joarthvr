function solution(msg) {
    // 1. 길이가 1인 모든 단어를 포함하도록 사전 초기화
    const dictionary = {};
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(65 + i); // A-Z
        dictionary[char] = i + 1;
    }
    
    const result = [];
    let nextIndex = 27; // 다음 사전 인덱스
    let current = 0; // 현재 처리 중인 문자 위치
    
    while (current < msg.length) {
        let w = msg[current];
        let maxLen = 1;
        
        // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다
        for (let i = 1; current + i <= msg.length; i++) {
            const testWord = msg.slice(current, current + i);
            if (dictionary[testWord]) {
                w = testWord;
                maxLen = i;
            } else {
                break;
            }
        }
        
        // 3. w에 해당하는 사전의 색인 번호를 출력
        result.push(dictionary[w]);
        
        // 4. 다음 글자가 있다면, w+c를 사전에 등록
        if (current + maxLen < msg.length) {
            const nextChar = msg[current + maxLen];
            const newWord = w + nextChar;
            dictionary[newWord] = nextIndex++;
        }
        
        // 처리된 문자열만큼 현재 위치 이동
        current += maxLen;
    }
    
    return result;
}


