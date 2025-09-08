function solution(N, stages) {
    const failureRateArr = new Array(N).fill(0);
    
    
    for(let i = 1; i <= N; i++){
        failureRateArr[i-1] = stages.filter((e) => e === i).length / stages.filter((e) => e >= i).length;    
    }
    const indices = Array.from(failureRateArr.keys());
    const sortedIndices = indices.sort((a, b) => failureRateArr[b] - failureRateArr[a]).map((e) => e + 1);
    return sortedIndices;
}
