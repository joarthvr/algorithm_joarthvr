function solution(id_list, report, k) {
    const ans = [];
    const reportObj = {};
    const reportedObj = {};
    for(const line of report){
        const [reporter, reported] = line.split(" ");
        if(!(reporter in reportObj)) reportObj[reporter] = [];
        
        if(!(reported in reportedObj)) reportedObj[reported] = 0;
        
        if(!reportObj[reporter].includes(reported)) {
            reportObj[reporter].push(reported);
            reportedObj[reported] += 1;
        }
    }
    const overK = Object.keys(reportedObj).filter((e) => reportedObj[e] >= k);
    for(const user of id_list){
        let sum = 0
        for(let i = 0; i < overK.length; i++){
            if((reportObj[user] ?? []).includes(overK[i])){
                sum++;
            }
        }
        ans.push(sum);
    }
    return ans;
}

// 한번에 한명의 유저 신고 (중복가능 제한없음)
// k번 이상 신고될 시 정지
// 해당유저 신고한 유저 정지 사실 메일 발송
// 단, 한번에 신고를 처리해서 메일을 이 때 발송함
