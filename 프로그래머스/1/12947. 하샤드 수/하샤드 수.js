function solution(x) {
    let x1 = x.toString();
    let size = x1.length;
    let sum = 0;
    for(let i = 0; i < size; i++){
            sum += x % 10;
            x = Math.floor(x / 10);
            console.log(x);
    }
    console.log(sum);
    return Math.floor(x1) % sum === 0 ? true : false;
    
}