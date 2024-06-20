function solution(x) {
    x = x.toString();
    x = x.split("");
    x = x.join("")
    let sum = 0;
    for(let i = 0; i < x.length; i++){
        sum += Math.floor(x[i]);
    }
    return Math.floor(x) % sum === 0 ? true :  false
}