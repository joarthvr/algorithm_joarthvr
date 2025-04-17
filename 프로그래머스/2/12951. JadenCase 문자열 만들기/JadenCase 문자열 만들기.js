function solution(s) {
    return s.split(" ")
        .map(word => {
            if (!word) return word; // 빈 문자열 처리
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}