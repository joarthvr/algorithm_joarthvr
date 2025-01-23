function solution(diffs, times, limit) {
    function canSolve(level) {
        let total = 0;
        
        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] <= level) {
                if (total + times[i] > limit) return false;
                total += times[i];
            } else {
                const fails = diffs[i] - level;
                const retryTime = times[i] + (i > 0 ? times[i-1] : 0);
                
                if (fails > limit || retryTime > Math.floor(limit / fails)) return false;
                const timeNeeded = retryTime * fails + times[i];
                if (timeNeeded > limit || total + timeNeeded > limit) return false;
                total += timeNeeded;
            }
        }
        return true;
    }

    let left = 1;
    let right = 1000000;
    
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (canSolve(mid)) right = mid;
        else left = mid + 1;
    }
    
    return left;
}