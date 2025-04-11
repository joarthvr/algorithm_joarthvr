function solution(id_list, report, k) {
    const length = id_list.length;
    const reportObj = {};
    const reportedObj = {};
    
    //객체 세팅
    for(const name of id_list){
        reportObj[name] = new Set(); 
        reportedObj[name] = 0; 
    }
    //결과 배열
    const result = new Array(length).fill(0);
    //중복 리포트 삭제
    report = [...new Set(report)];
    
    //신고 현황을 저장한다
    for(const circumstance of report){
        let detail = circumstance.split(" ");
        reportObj[detail[0]].add(detail[1]);
        reportedObj[detail[1]]++;
    }
    
    
    for(const name of id_list){
        if(reportedObj[name] >= k){
        for(let i = 0; i < length; i++){
            if(reportObj[id_list[i]].has(name)){
                result[i]++;    
            }
        }
        }
    }
    return result;
}