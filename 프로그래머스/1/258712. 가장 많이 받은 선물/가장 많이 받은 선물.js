function solution(friends, gifts) {
    // 친구 정보를 저장할 객체 초기화
    let person = {};
    friends.forEach(name => {
        person[name] = {
            send: {},
            receive: {},
            nextReceive: 0,
            point: 0
        };
        friends.forEach(name2 => {
            person[name].send[name2] = 0;
            person[name].receive[name2] = 0;
        });
    });
console.log(person)
    // 선물 데이터를 기반으로 선물 주고받은 횟수 및 포인트 계산
    gifts.forEach(data => {
        let d = data.split(' ');
        let sender = d[0];
        let receiver = d[1];
        person[sender].send[receiver]++;
        person[sender].point++;
        person[receiver].receive[sender]++;
        person[receiver].point--;
    });
    console.log(person)
    for(let i=0; i<friends.length-1; i++){
    for(let k=i+1; k<friends.length; k++){
            if(
                person[friends[i]].send[friends[k]] > person[friends[k]].send[friends[i]]
            ) {
                person[friends[i]].nextReceive++;
            } else if (
                person[friends[i]].send[friends[k]] < person[friends[k]].send[friends[i]]
            ) {
                person[friends[k]].nextReceive++;
            } else if (
                person[friends[i]].send[friends[k]] === person[friends[k]].send[friends[i]]
            ) {
                if(person[friends[i]].point > person[friends[k]].point){
                    person[friends[i]].nextReceive++;
                } else if (person[friends[i]].point < person[friends[k]].point){
                    person[friends[k]].nextReceive++;
                }
            }
    }
}
    let result = Object.entries(person).sort((a, b) => a[1].nextReceive - b[1].nextReceive);
    answer = result[result.length-1][1].nextReceive;

    
    
    return answer;
}

