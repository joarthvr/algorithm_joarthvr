function solution(orders, course) {
    const ans = [];
    
    function combination(arr, r){
        const result = [];
        function dfs(current, idx){
            if(current.length === r){
                    result.push([...current]);
                    return;
                }
            for(let i = idx; i < arr.length; i++){
                current.push(arr[i])
                dfs(current, i+1);
                current.pop();
            }
        }
        dfs([], 0);
        return result;
    }
    
    
    for(const c of course){
        const menu = [];
        for(const order of orders){
            const orderedArr = order.split("").sort();
            const combi = combination(orderedArr, c);
            menu.push(...combi);
            }
    const countObj = {}
    for(const m of menu){
        const key = m.join('');
        countObj[key] = (countObj[key] || 0) + 1
    }
    const max = Math.max(...Object.values(countObj));
    for(const [key, value] of Object.entries(countObj)){
        if(max > 1 && value === max){
            ans.push(key);
        }
    }
    }
    return ans.sort();
}