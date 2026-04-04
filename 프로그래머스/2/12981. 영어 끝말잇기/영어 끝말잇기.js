function solution(n, words) {
    let cnt = [1,1];
    const set = new Set();
    set.add(words[0])
    let prevChar = words[0][words[0].length - 1];
    
    for(let i = 1; i < words.length; i++){
        cnt [0] = (i % n) + 1;
        if(i % n === 0) cnt[1] += 1;
        const cur = words[i];
        const curChar = cur[0];
        if(set.has(cur) || prevChar !== curChar){
            return cnt;
        }
        set.add(cur);
        prevChar = cur[cur.length - 1]
        
    }
    
    return [0,0];
    
}

// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
// 했던 거 말하거나 => set
// 철자가 틀릴 때 => 조건문 
// 시뮬레이션