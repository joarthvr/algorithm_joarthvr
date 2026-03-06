function solution(enroll, referral, seller, amount) {
    const n = enroll.length;
    const nameToIndex = new Map();
    
    for (let i = 0; i < n; i++) {
        nameToIndex.set(enroll[i], i);
    }

    const parent = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (referral[i] !== "-") {
            parent[i] = nameToIndex.get(referral[i]);
        }
    }

    const profit = Array(n).fill(0);

    for (let i = 0; i < seller.length; i++) {
        let cur = nameToIndex.get(seller[i]);
        let money = amount[i] * 100;

        while (cur !== -1 && money > 0) {
            const give = Math.floor(money * 0.1);
            const keep = money - give;

            profit[cur] += keep;
            money = give;
            cur = parent[cur];
        }
    }

    return profit;
}