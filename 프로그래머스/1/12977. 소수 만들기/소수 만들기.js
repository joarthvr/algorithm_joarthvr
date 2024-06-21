function combination(items, idx, k, list, result) {
    if (items.length === k) {
        result.push(items);
        return;
    }
    for (let I = idx; I < list.length; I++) {
        combination([...items, list[I]], I + 1, k, list, result);
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let ans = 0;
    let result = [];
    combination([], 0, 3, nums, result);
    console.log("조합:", result);

    // 각 조합의 합을 계산하여 출력
    let sums = result.map(comb => comb.reduce((acc, num) => acc + num, 0));
    console.log("각 조합의 합:", sums);

    for (let sum of sums) {
        if (isPrime(sum)) {
            ans++;
        }
    }
    return ans;
}