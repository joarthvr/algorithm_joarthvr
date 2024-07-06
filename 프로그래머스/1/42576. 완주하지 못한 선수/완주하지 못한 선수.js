function solution(participant, completion) {
    let participantCount = {};

    // 참가자 배열의 각 요소를 카운트하여 해시맵에 저장합니다.
    participant.forEach(e => {
        if (participantCount[e]) {
            participantCount[e]++;
        } else {
            participantCount[e] = 1;
        }
    });

    // 완주자 배열의 각 요소에 대해 해시맵에서 해당 카운트를 감소시킵니다.
    completion.forEach(e => {
        if (participantCount[e]) {
            participantCount[e]--;
        }
    });

    // 카운트가 0이 아닌 요소를 찾아서 반환합니다.
    for (let key in participantCount) {
        if (participantCount[key] > 0) {
            return key;
        }
    }
}