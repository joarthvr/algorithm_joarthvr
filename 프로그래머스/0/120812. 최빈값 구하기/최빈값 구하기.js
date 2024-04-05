function solution(array) {
    let sortedArray = array.sort((a,b) => a-b);
    let repeatCnt = 0;
    let beforeNumber = -1;
    let modeCnt = 0;
    let mode = 0;
    let isDup = false;
    let cnt = -1;
    
    if(array.length === 1){
        return array[0];
    }
    while(cnt < array.length){
        if(beforeNumber !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt++;
        }
    
    if(repeatCnt === modeCnt){
        if(mode !== array[cnt]){
            isDup = true;
        }
    }
    
    if(repeatCnt > modeCnt) {
        mode = array[cnt];
        modeCnt = repeatCnt;
        isDup = false;
    }
        beforeNumber = array[cnt];
        cnt++;
    }
    
    if(isDup) return -1;
    return mode;
     
}
