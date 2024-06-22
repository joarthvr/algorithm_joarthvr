function solution(n, arr1, arr2) {
    arr1 = arr1.map(e => e.toString(2).padStart(n, '0'));
    arr2 = arr2.map(e => e.toString(2).padStart(n, '0'));
    let result = [];
    let tmp = ""
    for(let i = 0; i < n; i++){
        tmp = ""
        for(let j = 0; j < n; j++){
            if(arr1[i][j] === '0' && arr2[i][j] === '0'){
                tmp +=" ";
            }
            else{
                tmp +="#";
            }
        }
        result.push(tmp);
    }
    return result
}
