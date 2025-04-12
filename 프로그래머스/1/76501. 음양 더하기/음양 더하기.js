function solution(absolutes, signs) {
    return absolutes.map((e,i)=> {
        if(!signs[i]) e *= -1;
        return e;
    }).reduce((a,e) => a + e,0);
}