function solution(arr1, arr2) {
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    const result = [];
    
    for(let i = 0; i < r1; i++){
        const tmp = [];
        for(let j = 0; j < c2; j++){
            let sum = 0;
            for(let k = 0; k < c1; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            
            tmp.push(sum);
        }
        result.push(tmp)
    }
    return result;
}