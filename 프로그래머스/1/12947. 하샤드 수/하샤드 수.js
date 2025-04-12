function solution(x) {
    return x % String(x).split("").reduce((a,e) => a + Number(e), 0) === 0 ? true : false;
    
}