function solution(k, d) {
    // const limit = d * d;
    let result = 0;
    for(let x = 0; x * k <= d; x++){
        const kx = k * x;
        const y = Math.pow(d,2) / Math.pow(k,2) - Math.pow(x,2); 
        result+=(Math.floor(Math.sqrt(y))) + 1;
   }
    return result;
}