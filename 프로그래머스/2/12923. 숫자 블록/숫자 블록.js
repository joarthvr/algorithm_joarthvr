function solution(begin, end) {
    const LIMIT = 10000000;
    const len = end - begin + 1;
    const answer = new Array(len).fill(0);

    for (let idx = 0; idx < len; idx++) {
        const num = begin + idx;

        if (num === 1) {          // 1번 위치는 항상 0
            answer[idx] = 0;
            continue;
        }

        let best = 1;             // 최소한 1은 항상 약수
        const root = Math.floor(Math.sqrt(num));

        for (let j = 2; j <= root; j++) {
            if (num % j === 0) {
                const pair = num / j;

                // 짝 약수 pair가 더 크기 때문에 먼저 확인
                if (pair <= LIMIT) {
                    best = Math.max(best, pair);
                    break;        // 가장 큰 pair를 찾았으므로 바로 종료 가능
                }

                // pair가 너무 크면 j를 후보로 삼을 수 있음
                if (j <= LIMIT) {
                    best = Math.max(best, j);
                    // 계속 돌면서 더 큰 j 또는 다른 pair를 찾을 수 있음
                }
            }
        }

        answer[idx] = best;
    }

    return answer;
}
