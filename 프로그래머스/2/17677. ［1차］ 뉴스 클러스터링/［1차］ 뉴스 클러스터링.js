function solution(str1, str2) {
    const MUL = 65536;
    
    const str1Pair = [];
    const str2Pair = [];
    
    // 두 글자씩 묶어서 영문자 쌍만 검사
    for(let i = 0; i < str1.length - 1; i++){
        const char1 = str1[i].toLowerCase();
        const char2 = str1[i+1].toLowerCase();
        
        // 두 문자 모두 영문자인지 확인
        if(char1 >= 'a' && char1 <= 'z' && char2 >= 'a' && char2 <= 'z') {
            str1Pair.push(char1 + char2);
        }
    }
    
    for(let i = 0; i < str2.length - 1; i++){
        const char1 = str2[i].toLowerCase();
        const char2 = str2[i+1].toLowerCase();
        
        if(char1 >= 'a' && char1 <= 'z' && char2 >= 'a' && char2 <= 'z') {
            str2Pair.push(char1 + char2);
        }
    }
    
    // 둘 다 공집합인 경우
    if(str1Pair.length === 0 && str2Pair.length === 0) {
        return MUL;
    }
    
    // 나머지 코드는 동일...
    const totalCategory = [...new Set([...str1Pair, ...str2Pair])];
    
    let union = 0;
    let intersection = 0;
    
    for(let i = 0; i < totalCategory.length; i++){
        const str = totalCategory[i];
        const s1 = str1Pair.reduce((accu, curr) => curr === str ? accu + 1 : accu, 0);
        const s2 = str2Pair.reduce((accu, curr) => curr === str ? accu + 1 : accu, 0);
        intersection += Math.min(s1, s2);
        union += Math.max(s1, s2);
    }
    
    return Math.floor((intersection / union) * MUL);
}