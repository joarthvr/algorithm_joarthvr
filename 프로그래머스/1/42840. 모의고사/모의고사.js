function solution(answers) {
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 맞춘 개수를 저장할 객체
    let cnt = { 1: 0, 2: 0, 3: 0 };

    // 각 답안 패턴과 정답을 비교하여 맞춘 개수 세기
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === a[i % a.length]) cnt[1]++;
        if (answers[i] === b[i % b.length]) cnt[2]++;
        if (answers[i] === c[i % c.length]) cnt[3]++;
    }

    // 최대 맞춘 개수 찾기
    let maxScore = Math.max(cnt[1], cnt[2], cnt[3]);

    // 최대 맞춘 개수를 가진 사람 찾기
    let result = [];
    for (let key in cnt) {
        if (cnt[key] === maxScore) {
            result.push(Number(key));
        }
    }

    return result;
}