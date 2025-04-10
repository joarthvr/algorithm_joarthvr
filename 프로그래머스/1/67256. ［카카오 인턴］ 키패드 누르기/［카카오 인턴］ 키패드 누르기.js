function solution(numbers, hand) {
    // 키패드 좌표 설정 (0부터 9까지, *은 10, #은 11로 표현)
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    // 주손 설정
    const preferredHand = hand === "right" ? "R" : "L";
    
    // 초기 손가락 위치
    let leftPos = keypad['*'];
    let rightPos = keypad['#'];
    
    // 결과 문자열
    let result = '';
    
    for (const num of numbers) {
        // 항상 왼손을 사용하는 경우
        if (num === 1 || num === 4 || num === 7) {
            result += 'L';
            leftPos = keypad[num];
        }
        // 항상 오른손을 사용하는 경우
        else if (num === 3 || num === 6 || num === 9) {
            result += 'R';
            rightPos = keypad[num];
        }
        // 가운데 열의 경우 거리 계산
        else {
            const targetPos = keypad[num];
            
            // 맨해튼 거리 계산
            const leftDist = Math.abs(leftPos[0] - targetPos[0]) + Math.abs(leftPos[1] - targetPos[1]);
            const rightDist = Math.abs(rightPos[0] - targetPos[0]) + Math.abs(rightPos[1] - targetPos[1]);
            
            // 거리 비교 후 결정
            if (leftDist < rightDist) {
                result += 'L';
                leftPos = targetPos;
            } else if (rightDist < leftDist) {
                result += 'R';
                rightPos = targetPos;
            } else {
                // 거리가 같으면 주손 사용
                result += preferredHand;
                if (preferredHand === 'L') {
                    leftPos = targetPos;
                } else {
                    rightPos = targetPos;
                }
            }
        }
    }
    
    return result;
}