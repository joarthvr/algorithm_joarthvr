function solution(n, lost, reserve) {
    // 여분의 체육복을 가진 학생이 도난당한 경우를 먼저 처리
    let filteredReserve = reserve.filter(r => !lost.includes(r));
    let filteredLost = lost.filter(l => !reserve.includes(l));

    filteredLost.sort((a, b) => a - b);

    filteredLost.forEach(lostStudent => {
        if (filteredReserve.includes(lostStudent - 1)) {
            filteredReserve = filteredReserve.filter(r => r !== lostStudent - 1);
        } else if (filteredReserve.includes(lostStudent + 1)) {
            filteredReserve = filteredReserve.filter(r => r !== lostStudent + 1);
        } else {
            n--;
        }
    });

    return n;
}