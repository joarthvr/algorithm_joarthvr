function solution(n, times) {
   times.sort((a,b) => a-b);
    let left = 1;
    let right = times[times.length - 1] * n;
    let ans = right;
    
   function check(t) {
    let sum = 0;
    for (const time of times) {
        sum += Math.floor(t / time);  // 심사관 한 명이 t분 동안 처리 가능한 수
    }
    return sum >= n;  // 총 처리 가능 수 ≥ n이면 true
}
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(check(mid)){
            ans = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return ans;
}

