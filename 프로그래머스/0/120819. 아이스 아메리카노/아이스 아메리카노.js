function solution(money) {
    var answer = [];
    let aa = 5500;
    let max = 0;
    let change = 0;
    
    max = Math.floor(money / aa);
    change = Math.floor(money % aa);
    
    answer[0] = max;
    answer[1] = change;
    return answer;
}

//aa = 5500
//가진 돈으로 최대로 마실 수 있는 아메리카노 잔 구하고
//가진 돈을 다썼을 때 남는돈을 구하고