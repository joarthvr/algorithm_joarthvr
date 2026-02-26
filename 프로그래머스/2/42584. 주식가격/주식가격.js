function solution(prices) {
    const n = prices.length;
    const arr = new Array(n).fill(0);
    const stack = []; // 인덱스 저장

    for (let i = 0; i < n; i++) {
        // 현재 가격이 스택 top의 가격보다 낮으면 → 가격 떨어진 시점
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const idx = stack.pop();
            arr[idx] = i - idx; // 버틴 시간 = 현재 인덱스 - 저장된 인덱스
        }
        stack.push(i);
    }

    // 스택에 남은 건 끝까지 안 떨어진 것들
    while (stack.length > 0) {
        const idx = stack.pop();
        arr[idx] = n - 1 - idx;
    }

    return arr;
}