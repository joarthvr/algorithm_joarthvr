function solution(n) {
    let pizza = 7;
    let share = Math.floor(n / pizza);
    let remain = Math.floor(n % pizza);
    if(remain === 0)
        return share;
    if(remain >= 1  && remain <= 6){
        return share + 1;
    }
}