function solution(n, m) {
    const min = Math.min(n,m);
    let divisor = 0;
    for(let i = 1; i <= min; i++){
        if(n % i === 0 && m % i === 0) divisor = i
    }
    const multiple = (n * m) / divisor;
    
    return [divisor, multiple];
}
// 두 자연수의 곱은 두수의 최대공약수 x 최소공배수
