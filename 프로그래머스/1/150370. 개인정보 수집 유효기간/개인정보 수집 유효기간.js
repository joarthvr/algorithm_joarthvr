function solution(today, terms, privacies) {
    let result = [];
    const todaySplitArr = today.split('.').map((element) => +element); // 오늘 날짜를 숫자로 변환하여 배열에 저장
    const expireDateMap = new Map();

    // 약관별 유효기간을 Map 객체에 저장
    for (let i = 0; i < terms.length; i++) {
        let [key, value] = terms[i].split(" "); // 공백을 기준으로 분리
        expireDateMap.set(key, +value); // 키는 문자 그대로, 값은 정수로 변환하여 Map에 저장
    }

    // 개인정보별 유효기간을 확인하여 결과에 추가
    for (let i = 0; i < privacies.length; i++) {
        let [date, key] = privacies[i].split(" "); // 공백을 기준으로 분리
        let [year, month, day] = date.split('.').map(Number); // 날짜를 년, 월, 일로 분리하여 숫자로 변환

        // 유효기간 더하기
        month += expireDateMap.get(key); // 월에 유효기간을 더함
        year += Math.floor(month / 12); // 년도를 월 수에 따라 증가
        month = month % 12 || 12; // 12월을 초과하면 월을 1~12 사이로 조정

        if (month === 12) year--; // 월이 12인 경우에는 다음 년도로 넘어가지 않도록 조정

        // 날짜 비교
        if (year < todaySplitArr[0] || 
           (year === todaySplitArr[0] && month < todaySplitArr[1]) ||
           (year === todaySplitArr[0] && month === todaySplitArr[1] && day <= todaySplitArr[2])) {
            result.push(i + 1);
        }
    }

    return result;
}