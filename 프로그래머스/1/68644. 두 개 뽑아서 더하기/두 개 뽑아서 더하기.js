function solution(numbers) {
    const result = [];
    const len = numbers.length;
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            result.push(numbers[i] + numbers[j]);
        }
    }
    return [...new Set(result)].sort((a,b) => a-b);
    
}