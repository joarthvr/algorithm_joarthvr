function solution(n, q, ans) {
    let result = 0;
    const arr = Array.from({length : n}, (_,i)=>i+1);
    const qSets = q.map((e)=>new Set(e));
    function isVaild(arr){
        
        for(let i = 0; i < qSets.length; i++){
            let cnt = 0;
            for(let j = 0; j < arr.length; j++){
                if(qSets[i].has(arr[j])) cnt++;
            }
            if(cnt !== ans[i]) return false;
        }
        return true;
    }
    
    function dfs (current, idx){
        if(current.length === 5){
            if(isVaild(current)) result++;
            return;
        }
        for(let i = idx; i < arr.length; i++){
            current.push(arr[i]);
            dfs(current, i + 1);
            current.pop();
        }
    }
    dfs([],0);
    
    return result;
}