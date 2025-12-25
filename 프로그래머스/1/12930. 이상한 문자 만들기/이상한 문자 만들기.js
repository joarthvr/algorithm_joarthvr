function solution(s) {
    return s.split(" ").map((word) => { // 1. 공백 기준으로 단어별로 자름 (word는 문자열)
        
        // 2. 문자열(word)은 map을 못 쓰므로, split("")으로 글자 배열로 만듦
        return word.split("").map((char, index) => { 
            
            // 3. 짝수 인덱스는 대문자, 홀수는 소문자 (소문자 처리가 있어야 완벽합니다)
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
            
        }).join(""); // 4. 글자 배열을 다시 단어 문자열로 합침
        
    }).join(" "); // 5. 단어들을 다시 공백을 넣어 문장으로 합침
}