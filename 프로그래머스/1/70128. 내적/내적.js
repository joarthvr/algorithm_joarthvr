function solution(a, b) {
    let ans = a.reduce((acc,e,i) => {
        return acc += e * b[i] 
    },0);
    return ans;
}