function solution(want, number, discount) {
    let ans = 0;
    const obj = {};
    const n = want.length;
    for(let i = 0; i < n; i++){
        obj[want[i]] = number[i];
    }
    
    for(let i = 0; i <= discount.length - 10; i++){
        const copy = {...obj};
        let idx = i;
        while(i + 9 >= idx){
        if(copy[discount[idx]] > 0){
            copy[discount[idx]] = copy[discount[idx]] - 1;
        }
            idx++;
        }
        const result = [...new Set(Object.values(copy))];
        if(result.length === 1 && result[0] === 0) ans++;
    }
    return ans
}