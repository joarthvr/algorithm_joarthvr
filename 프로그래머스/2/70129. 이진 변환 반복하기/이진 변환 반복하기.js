function solution(s) {
    //횟수와 제거된 모든 0의 개수
    let zeroCnt = 0;
    let tryCnt = 0;
    
    const transform = (str) =>{
        if(str === '1') return;
        const deleteZero = str.split("").reduce((acc, curr) => curr === '1' ? acc + '1' : acc, "");
        zeroCnt += str.length - deleteZero.length;
        tryCnt++;
        const newStr = String(deleteZero.length.toString(2));
        transform(newStr, zeroCnt, tryCnt);
    }
    transform(s);
    return [tryCnt, zeroCnt]
}