function solution(numbers) {
    let ans = [];
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = 1; j < numbers.length - i; j++){
            if (!ans.includes(numbers[i] + numbers[i+j])) {
                  ans.push(numbers[i] + numbers[i+j]);
    }}}
    return ans.sort((a,b) => a-b);


}