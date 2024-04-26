function solution(food) {
    let half = [];
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i] / 2); j++){
            half.push(i);
        }
    }
    let ans = [...half, 0, ...half.reverse()].join('');
    console.log(ans);
    return ans;
}
