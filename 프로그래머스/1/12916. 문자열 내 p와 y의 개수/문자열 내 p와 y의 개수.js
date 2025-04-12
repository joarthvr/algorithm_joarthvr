function solution(s){
    s = s.toLowerCase().split("");
    const pCnt = s.reduce((acc, curr) => {
    return curr === 'p' ? acc + 1 : acc;
    }, 0)
    const yCnt = s.reduce((acc, curr) => {
    return curr === 'y' ? acc + 1 : acc;
    }, 0)
    
    return pCnt === yCnt ? true : false; 
    
}
