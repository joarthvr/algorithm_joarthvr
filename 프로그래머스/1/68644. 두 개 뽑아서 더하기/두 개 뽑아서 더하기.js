function solution(numbers) {
    const tmp = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1 ; j < numbers.length; j++ ){
            tmp.push(numbers[i] + numbers[j]);
        }
    }
    return ([...new Set(tmp)].sort((a,b) => a-b));
}