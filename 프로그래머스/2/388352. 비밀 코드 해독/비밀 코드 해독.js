function solution(n, q, ans) {
    let count = 0;
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const qSets = q.map(v => new Set(v));
    
    function isValid(current) {
        for (let i = 0; i < q.length; i++) {
            let match = 0;
            for (const num of current) {
                if (qSets[i].has(num)) match++;
            }
            if (match !== ans[i]) return false;
        }
        return true;
    }

    function dfs(start, current) {
        if (current.length === 5) {
            if (isValid(current)) count++;
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(0, []);
    return count;
}