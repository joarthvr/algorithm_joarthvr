function solution(k, tangerine) {
    let size = [];
    let q = 0;
    tangerine = tangerine.sort((a,b)=>a-b);
    for(let i = 0; i < tangerine.length; i++){
        if(tangerine[i+1] !== tangerine[i]){
        size.push(i+1 - q);
        q=i+1;
        }
    }
    size = size.sort((a,b)=>b-a);
    let i = 0;
    let cnt = 0;
    while(k > 0){
        k = k-size[i]
        cnt++;
        i++;
    }
    return cnt;
}