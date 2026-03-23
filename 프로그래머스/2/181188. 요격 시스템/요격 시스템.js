function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let last = -1;

    for (const [s, e] of targets) {
        if (last <= s) {
            count++;
            last = e;
        }
    }

    return count;
}