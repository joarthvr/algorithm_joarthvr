function solution(rows, columns, queries) {
    const result = [];
    let cnt = 1;
    
    const board = [];
    for(let i = 0; i < rows; i++){
        const arr = [];
        for(let j = 0; j < columns; j++){
            arr.push(cnt);
            cnt++;
        }
        board.push(arr);
    }
    
    for(let [x1,y1,x2,y2] of queries){
        x1--; y1--; x2--; y2--; 
        
        let min = Infinity;
        let currentX = x1;
        let currentY = y1;
        let currentValue = board[x1][y1];
        
        const perimeter = 2 * ((x2 - x1) + (y2 - y1));
        let k = perimeter;
        while(k--){
           
            if(currentX === x1 && currentY < y2){
                currentY++;
            }
            else if(currentY === y2 && currentX < x2){
                currentX++;
            }
            else if(currentX === x2 && currentY > y1){
                currentY--;
            }
            else if(currentY === y1 && currentX > x1){
                currentX--;
            }
             const tmp = board[currentX][currentY];
            board[currentX][currentY] = currentValue;
            currentValue = tmp;
            min = Math.min(min, currentValue);
        }
       
        result.push(min);
    }
    return result;
}
