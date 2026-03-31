function solution(sticker) {
    const n = sticker.length;
    if (n === 1) return sticker[0];
    if (n === 2) return Math.max(sticker[0], sticker[1]);

    function solve(start, end) {
        let prev2 = sticker[start];
        let prev1 = Math.max(sticker[start], sticker[start + 1]);

        for (let i = start + 2; i <= end; i++) {
            const cur = Math.max(prev1, prev2 + sticker[i]);
            prev2 = prev1;
            prev1 = cur;
        }

        return prev1;
    }

    const case1 = solve(0, n - 2); // 첫 번째 포함, 마지막 제외
    const case2 = solve(1, n - 1); // 첫 번째 제외, 마지막 포함 가능

    return Math.max(case1, case2);
}