function solution(targets) {
    targets.sort((a,b)=>a[1] - b[1]);
    let last = -1;
    let ans = 0;
    for(const [s,e] of targets){
        if(last <= s){
            ans++;
            last = e;
        }
    }
    return ans;
}