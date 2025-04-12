function solution(n) {
    let ans = ""
    let i = 1;
    while(i <= n){
        ans += i % 2 === 0 ? "박" : "수";
        i++;
   }
    return ans;
}