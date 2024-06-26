function solution(n, lost, reserve) {
    // 여분의 체육복을 가진 학생과 도난당한 학생을 정렬합니다.
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    // 여분의 체육복을 가진 학생이 도난당한 경우를 먼저 처리
    for (let i = 0; i < reserve.length; i++) {
        if (lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(i, 1);
            i--;
        }
    }

    // 도난당한 학생이 여분의 체육복을 빌릴 수 있는지 확인
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            reserve.splice(reserve.indexOf(lost[i] - 1), 1);
        } else if (reserve.includes(lost[i] + 1)) {
            reserve.splice(reserve.indexOf(lost[i] + 1), 1);
        } else {
            n--;
        }
    }

    return n;
}