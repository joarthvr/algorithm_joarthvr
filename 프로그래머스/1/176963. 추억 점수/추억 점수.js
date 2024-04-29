function solution(name, yearning, photo) {
    let sum = new Array(photo.length).fill(0); // sum 배열을 photo의 길이만큼 0으로 초기화
    let map = new Map();

    // 이름과 그에 대한 갈망 점수를 맵에 저장
    name.forEach((e, i) => {
        map.set(e, yearning[i]);
    });

    // 각 사진을 순회하면서 사진에 있는 모든 사람의 갈망 점수의 합을 계산
    for (let i = 0; i < photo.length; i++) {
        photo[i].forEach(person => { // photo[i]는 각 사진에 있는 사람들의 이름 배열
            if (map.has(person)) { // 맵에 해당 사람이 존재하는지 확인
                sum[i] += map.get(person); // 해당 사람의 갈망 점수를 sum[i]에 추가
            }
        });
        console.log(sum[i]); // 각 사진의 메모리 점수를 콘솔에 출력
    }

    return sum; // 각 사진의 메모리 점수 배열을 반환
}
