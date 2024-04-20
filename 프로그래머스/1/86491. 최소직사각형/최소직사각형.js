function solution(sizes) {
    let side1 = 0; // 가장 긴 길이 중 최댓값을 저장
    let side2 = 0; // 가장 짧은 길이 중 최댓값을 저장

    for (let i = 0; i < sizes.length; i++) {
        let longerSide = Math.max(sizes[i][0], sizes[i][1]);
        let shorterSide = Math.min(sizes[i][0], sizes[i][1]);
        
        side1 = Math.max(side1, longerSide);
        side2 = Math.max(side2, shorterSide);
    }

    return side1 * side2; // 최종 지갑의 크기 반환
}
