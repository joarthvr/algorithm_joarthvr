function solution(brown, yellow) {
    let sum = brown + yellow;
    let y = 0;
    let ans = [];
    for(let i = 3; i < sum; i++){
        y = sum / i;
        if((i-2) * (y-2) === yellow){
            ans.push(y);
            ans.push(i);
            return ans;
        } 
    }
}