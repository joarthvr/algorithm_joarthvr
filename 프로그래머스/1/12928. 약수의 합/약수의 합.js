function solution(n) {
    if(n===1) return 1;
    const len = Math.floor(n/2);
    const set = new Set();
    for(let i = 1; i < len; i++){
        if(n % i === 0){
            set.add(n / i);
            set.add(i);
        }
    }
    return [...set].reduce((acc,cur) => acc += cur, 0)
}