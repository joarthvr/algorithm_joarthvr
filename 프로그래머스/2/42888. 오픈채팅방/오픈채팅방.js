function solution(record) {
    const userMap = {}; // 사용자 ID와 최종 닉네임을 매핑하는 객체
    const actions = []; // 각 액션(입장/퇴장)을 저장하는 배열
    
    // 첫 번째 순회: 모든 사용자의 최종 닉네임을 확인
    for (const log of record) {
        const parts = log.split(" ");
        const action = parts[0];
        const userId = parts[1];
        
        if (action === "Enter" || action === "Change") {
            const nickname = parts[2];
            userMap[userId] = nickname; // 최신 닉네임으로 업데이트
        }
        
        // 액션 정보 저장 (Change는 메시지를 생성하지 않으므로 제외)
        if (action === "Enter" || action === "Leave") {
            actions.push({ action, userId });
        }
    }
    
    // 두 번째 순회: 최종 닉네임을 이용해 메시지 생성
    const result = actions.map(({ action, userId }) => {
        if (action === "Enter") {
            return `${userMap[userId]}님이 들어왔습니다.`;
        } else { // "Leave"
            return `${userMap[userId]}님이 나갔습니다.`;
        }
    });
    
    return result;
}