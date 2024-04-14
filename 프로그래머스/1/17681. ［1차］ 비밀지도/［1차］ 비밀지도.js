function solution(n, arr1, arr2) {
    let ans = [];
    arr1 = arr1.map(e => {
        let binary = e.toString(2);
        while (binary.length < n) {
            binary = '0' + binary;
        }
        return binary;
    });
    console.log(arr1);

    arr2 = arr2.map(e => {
        let binary = e.toString(2);
        while (binary.length < n) {
            binary = '0' + binary;
        }
        return binary;
    });
    console.log(arr2);
    
    for (let i = 0; i < arr1.length; i++) {
        ans[i] = [];  // 각 행에 대한 배열 초기화
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === '0' && arr2[i][j] === '0') {
                ans[i] += " ";
            } else {
                ans[i] += "#";
            }
        }
    }
    return ans;
}
