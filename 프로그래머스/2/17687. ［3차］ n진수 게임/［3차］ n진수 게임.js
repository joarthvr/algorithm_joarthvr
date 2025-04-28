function solution(n, t, m, p) {
    const converter = (num,jinsu) =>{
        return Number(num).toString(jinsu).toUpperCase().split("");
    }
    let result = "";
    let i = 0;
    const len = t * m;
    const candidate = [];
    while(len >= candidate.length ){
        candidate.push(...converter(i,n));
        i++;
    }
    let j = 0;
    while(result.length !== t){
        result += candidate[(p - 1) + (m*j)];
        j++;
    }
    return result;
}