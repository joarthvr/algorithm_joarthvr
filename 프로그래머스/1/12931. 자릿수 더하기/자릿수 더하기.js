function solution(n){
    n = n + "";
    n = n.split("");
    let sum = 0;
    n.map((e) =>{
        e = parseInt(e);
        sum += e;
    })
    return sum;
}