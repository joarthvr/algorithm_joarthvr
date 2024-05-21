function solution(clothes) {
    let arr = [];
    for(let i = 0; i < clothes.length; i++){
        arr.push(clothes[i][1]);
    }
    // Step 1: 각 숫자의 빈도를 계산합니다.
    const frequency = arr.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
    }, {});
    // Step 2: 빈도가 1보다 큰 숫자의 등장 횟수를 배열로 저장합니다.
    const repeatedCounts = Object.values(frequency)
        .filter(count => count > 0);
    const ans = repeatedCounts.reduce((a,e)=>{
        return a*(e+1);
    },1);
    return ans -1;
}


