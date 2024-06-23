function solution(name, yearning, photo) {
    let result = [];
    
    // name과 yearning을 매핑한 객체 생성
    let yearningMap = {};
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
    
    // photo 배열을 순회하며 결과 계산
    for (let i = 0; i < photo.length; i++) {
        let tmp = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (yearningMap[photo[i][j]] !== undefined) {
                tmp += yearningMap[photo[i][j]];
            }
        }
        result.push(tmp);
    }
    
    return result;
}