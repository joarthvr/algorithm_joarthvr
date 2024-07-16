function solution(keymap, targets) {
    let result = [];

    targets.forEach(target => {
        let sum = 0;

        for (let i = 0; i < target.length; i++) {
            let indexArr = [10001];  // 각 문자의 인덱스를 저장하는 배열을 초기화

            for (let j = 0; j < keymap.length; j++) {
                let index = keymap[j].indexOf(target[i]);
                if (index >= 0) {
                    indexArr.push(index + 1);  // 인덱스는 1부터 시작하므로 +1
                }
            }

            let minIndex = Math.min(...indexArr);

            if (minIndex === 10001) {  // 키맵에 문자가 없는 경우
                sum = -1;
                break;  // 현재 타겟 문자열에 대해 더 이상 계산할 필요가 없음
            } else {
                sum += minIndex;
            }
        }

        result.push(sum);
    });

    return result;
}