function solution(want, number, discount) {
    let cnt = 0;
    let i = 0;
    const period = 10;  // 확인할 기간(10일)

    while (i <= discount.length - period) {
        let arr = discount.slice(i, i + period);  // 10일 동안의 할인 품목
        let valid = true;
        
        for (let j = 0; j < want.length; j++) {
            let count = arr.reduce((cnt, element) => cnt + (want[j] === element), 0);
            if (count !== number[j]) {
                valid = false;
                break;
            }
        }

        if (valid) {
            cnt++;
        }

        i++;
    }

    return cnt;
}
