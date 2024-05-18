function solution(arr1, arr2) {
    let rowsA = arr1.length, colsA = arr1[0].length;
    let rowsB = arr2.length, colsB = arr2[0].length;
    
    let ans = Array.from(Array(rowsA), () => new Array(colsB).fill(0));
    
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                ans[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return ans;
}

//arr1의 행을 가져온다
//가져온 행 안의 원소들을 차례로 arr2의 첫 열의 원소들을 곱한다
//곱한 갑을 더한다
//더한값을 저장한다