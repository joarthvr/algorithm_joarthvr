function solution(babbling) {
    let result = 0;
    let pronounce = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        let isValid = true;
        let prevPronounce = '';

        while (isValid && word.length > 0) {
            let found = false;
            for (let j = 0; j < pronounce.length; j++) {
                if (word.startsWith(pronounce[j])) {
                    // 같은 발음이 연속되는지 확인
                    if (pronounce[j] === prevPronounce) {
                        isValid = false;
                        break;
                    }
                    prevPronounce = pronounce[j];
                    word = word.slice(pronounce[j].length);
                    found = true;
                    break;
                }
            }
            if (!found) {
                isValid = false;
            }
        }

        if (isValid && word.length === 0) {
            result++;
        }
    }

    return result;
}

