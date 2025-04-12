function solution(wallpaper) {
    // 드래그 영역의 초기값 설정
    let lux = Infinity;  // 가장 위쪽 파일의 x 좌표
    let luy = Infinity;  // 가장 왼쪽 파일의 y 좌표
    let rdx = -1;        // 가장 아래쪽 파일의 x 좌표
    let rdy = -1;        // 가장 오른쪽 파일의 y 좌표
  
    // 한 번의 이중 반복문으로 모든 좌표 검사
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                // 최소 좌표 (좌상단)
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                
                // 최대 좌표 (우하단)
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    
    // 끝점은 파일이 있는 위치보다 1 큰 값 (드래그 영역에 포함하기 위함)
    return [lux, luy, rdx + 1, rdy + 1];
}