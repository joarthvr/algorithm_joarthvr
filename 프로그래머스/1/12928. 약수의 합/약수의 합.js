function solution(n) {
    //1. n의 약수를 구한다
    //2. n약수를 모두 더한다
    let sum = 0;
    let tmp = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            tmp = n/i;
            sum += tmp + i;
        }
    }
    return sum/2;
}