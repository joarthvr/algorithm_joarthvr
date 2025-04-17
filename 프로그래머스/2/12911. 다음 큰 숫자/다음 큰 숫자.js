function solution(n) {
    const binaryN = n.toString(2);
    
    const standard = binaryN.split("").reduce((acc,curr) => acc += curr ==='1',0);
    while(1){
        let i = ++n;
        let binaryI = n.toString(2);
        let cntOne = binaryI.split("").reduce((acc,curr) => acc += curr ==='1',0);
        if(standard === cntOne) return i;
        
    }
}