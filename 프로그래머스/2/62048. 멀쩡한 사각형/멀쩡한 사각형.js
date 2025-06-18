function solution(w, h) {
    // 최대공약수 구하기 (유클리드 호제법)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // 대각선이 지나가는 격자 수 = 전체 - 대각선이 지나가지 않는 격자
    // 대각선이 지나가지 않는 격자 = W + H - gcd(W, H)
    return w * h - (w + h - gcd(w, h));
}