function solution(n, stations, w) {
    let answer = 0;
    const cover = 2 * w + 1;
    let start = 1;

    for (let i = 0; i < stations.length; i++) {
        const left = stations[i] - w;

        if (start < left) {
            const gap = left - start;
            answer += Math.floor((gap + cover - 1) / cover);
        }

        start = stations[i] + w + 1;
    }

    if (start <= n) {
        const gap = n - start + 1;
        answer += Math.floor((gap + cover - 1) / cover);
    }

    return answer;
}