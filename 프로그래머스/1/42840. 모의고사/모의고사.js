function solution(answers) {
    const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    const result = new Array(3).fill(0);
    
    for(let i = 0; i < patterns.length; i++){
        for(let j = 0; j < answers.length; j++){
            if(answers[j] === patterns[i][j % patterns[i].length]){
                result[i]++;
            }
        }
    }
    const max = Math.max(...result);
    const result1 = [];
    for(let i = 0; i < result.length; i++){
        if(result[i] === max){
            result1.push(i+1);
        }
        
    }
    
    return result1;
}