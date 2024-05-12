function solution(n) {
    const k = n.toString(2);
    const lenOne = k.replaceAll('0','').length
    let lenOne2 = 0;
    while(lenOne !== lenOne2){
        n++;
        const j = n.toString(2);
        lenOne2 = j.replaceAll('0','').length
    }
    return n;
}