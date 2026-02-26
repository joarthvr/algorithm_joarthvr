function solution(board, moves) {
    const n = board.length;
    const stack = [];
    const map = new Map();
    let result = 0;
    for(let i = 0; i < n; i++){
        const tmp = [];
        for(let j = 0; j < n; j++){
            if(board[j][i] !== 0) tmp.push(board[j][i]);
        }
        map.set(i+1,tmp.reverse())
    }
    for(let i = 0; i < moves.length; i++){
        const target = moves[i];
        if(map.get(target).length > 0){
          const picked = map.get(target).pop();  
            if(stack.length !== 0 && stack[stack.length - 1] === picked) {
                stack.pop();
                result += 2;
                continue;
            }
            stack.push(picked)
        }
        else {
            continue;
        }
    }
    
    return result;
}