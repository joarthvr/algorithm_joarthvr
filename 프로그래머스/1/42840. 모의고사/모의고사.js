function solution(answers) {
    const scores = [0,0,0];
    
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === p1[i % p1.length]) scores[0]++;
        if(answers[i] === p2[i % p2.length]) scores[1]++;
        if(answers[i] === p3[i % p3.length]) scores[2]++;
    }
    
    const max = Math.max(...scores);
    const result = [];
    for(let i = 0; i < scores.length; i++){
        if(scores[i] === max){
            result.push(i+1);
        }
    }   
    return result;
}