function solution(routes) {
    let ans = 0;
    routes.sort((a,b)=>a[1]-b[1]);
    let c = -30000;
    for(const [s,e] of routes){
        if(s > c) {
            ans++;
            c = e;
            console.log(s,e,ans)
        }
    }
    return ans;
}
// 모든 차량이 한 번 이상 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라 설치 ?
//[진입시점, 나간시점]