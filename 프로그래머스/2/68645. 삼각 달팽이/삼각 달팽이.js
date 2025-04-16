function solution(n) {
    // 삼각형을 표현할 2차원 배열 초기화
   const triangle = Array.from({length: n}, (_, i) => new Array(i+1).fill(0)); 
    console.log(triangle)
    let number = 1; // 채울 숫자 시작값
    let row = 0; // 현재 행
    let col = 0; // 현재 열
    let direction = 0; // 이동 방향 (0: 아래, 1: 오른쪽, 2: 왼쪽 위 대각선)
    
    // 총 채워야 할 숫자 개수 (삼각형 크기)
    const total = (n * (n + 1)) / 2;
    
    // 모든 숫자를 채울 때까지 반복
    while (number <= total) {
        // 현재 위치에 숫자 채우기
        triangle[row][col] = number++;
        
        // 다음 위치 계산
        if (direction === 0) { // 아래로 이동
            if (row + 1 < n && triangle[row + 1][col] === 0) {
                row++;
            } else {
                direction = 1; // 방향 전환: 오른쪽으로
                col++;
            }
        } else if (direction === 1) { // 오른쪽으로 이동
            if (col + 1 <= row && triangle[row][col + 1] === 0) {
                col++;
            } else {
                direction = 2; // 방향 전환: 왼쪽 위 대각선으로
                row--;
                col--;
            }
        } else { // 왼쪽 위 대각선으로 이동
            if (row - 1 >= 0 && col - 1 >= 0 && triangle[row - 1][col - 1] === 0) {
                row--;
                col--;
            } else {
                direction = 0; // 방향 전환: 아래로
                row++;
            }
        }
    }
    
    // 2차원 배열을 1차원 배열로 평탄화
    return triangle.flat();
}

