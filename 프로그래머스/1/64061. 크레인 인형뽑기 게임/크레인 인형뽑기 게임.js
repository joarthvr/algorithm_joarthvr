function solution(board, moves) {
    let board1 = [];
    
    // 보드 트랜스포즈
    for (let i = 0; i < board.length; i++) {
        let tmpArr = [];
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] === 0)
                continue;
            tmpArr.push(board[j][i]);
        }
        board1.push(tmpArr);
    }
    
    let basket = [];
    let result = 0;
    
    // moves를 처리하여 인형을 바구니에 추가
    moves.forEach((e, index) => {
        if (board1[e-1] && board1[e-1].length > 0) {
            let item = board1[e-1][0]; // 첫 번째 아이템을 가져옵니다.
            board1[e-1].shift(); // 첫 번째 아이템을 배열에서 제거합니다.
            
            if (basket.length > 0 && basket[basket.length - 1] === item) {
                basket.pop(); // 바구니의 마지막 아이템과 동일하면 제거
                result += 2; // 제거된 인형 수를 2개 증가
            } else {
                basket.push(item); // 그렇지 않으면 바구니에 추가
            }
        }
    });

    return result;
}