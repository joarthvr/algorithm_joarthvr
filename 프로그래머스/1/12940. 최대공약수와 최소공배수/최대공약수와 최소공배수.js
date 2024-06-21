function solution(n, m) {
    let co1 = 1;
    for(let i = 2; i <= n; i++){
        if(m % i === 0 && n % i === 0)
            co1 = i;
    }
    let comMul = (n * m) / co1;
    return [co1, comMul];
}
// 두 자연수의 곱은 두수의 최대공약수 x 최소공배수
