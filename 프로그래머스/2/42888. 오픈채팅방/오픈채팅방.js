function solution(record) {
    const obj = {};
    const ans = [];
    
    for(const line of record){
        const [event, id, nickname] = line.split(" ");
        if(event !== 'Leave') obj[id] = nickname;
    }
    for(const line of record){
        const [event, id, nickname] = line.split(" ");
        if(event === 'Enter'){
            ans.push(`${obj[id]}님이 들어왔습니다.`)
            continue;
        }
        if(event === 'Leave'){
            ans.push(`${obj[id]}님이 나갔습니다.`)
            continue;
        }
    }
    return ans;
}