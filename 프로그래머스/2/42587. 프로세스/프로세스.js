function solution(priorities, location) {
    const q = [];
   for(let i = 0; i < priorities.length; i++){
       q.push([priorities[i], i]);
    }
    const sorted = [...priorities].sort((a,b) => a-b);
    let idx = 0;
    let cnt = 0;
    console.log(sorted);
    while(idx !== q.length){
        const [fV,fI] = q[idx++];
        if(fV === sorted[sorted.length - 1]){
            sorted.pop();
            cnt++;
            if(fI === location) return cnt;
        }
        else{
            q.push([fV,fI]);
        }
    }
   
}
// 뭘 저장? [우선순위, 원래 인덱스] 쌍
// 언제 저장? 최대 우선순위가 아닐 때 큐 뒤에 다시 넣음
// 어디서 시작? 큐 앞에서부터 (인덱스 포인터 방식)
// 우선순위를 어떻게 관리하지?