function solution(survey, choices) {
    let result = '';
    
    // 성격 유형 점수를 저장할 객체
    let scores = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };
    
    // 각 선택지에 대한 점수
    let scoreMap = [3, 2, 1, 0, 1, 2, 3];
    
    // 설문 조사 결과를 바탕으로 점수 계산
    for (let i = 0; i < survey.length; i++) {
        let type = survey[i];
        let choice = choices[i];
        
        if (choice < 4) {
            scores[type[0]] += scoreMap[choice - 1];
        } else if (choice > 4) {
            scores[type[1]] += scoreMap[choice - 1];
        }
    }
    
    // 최종 성격 유형 계산
    result += scores['R'] >= scores['T'] ? 'R' : 'T';
    result += scores['C'] >= scores['F'] ? 'C' : 'F';
    result += scores['J'] >= scores['M'] ? 'J' : 'M';
    result += scores['A'] >= scores['N'] ? 'A' : 'N';
    
    return result;
}

