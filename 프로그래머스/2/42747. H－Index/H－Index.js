function solution(citations) {
    // 인용 횟수 배열을 내림차순으로 정렬
    citations.sort((a, b) => b - a);
    // 배열을 순회하며 H-Index를 찾음
    for (let i = 0; i < citations.length; i++) {
        // 현재 인용 횟수
        let h = citations[i];
        
        // 조건을 만족하는지 확인
        if (h >= i + 1 && (i + 1 === citations.length || citations[i + 1] <= i + 1)) {
            return i + 1;
        }
    }
    return 0;
}
