function solution(people, limit) {
    //구명보트를 최대한 적게 사용하여 모든 사람을 구출
    //모든 사람을 구출하기 위해 필요한 구명보트 개수
    //한 번에 두명 탑승
    let cnt = 0;
    people = people.sort((a,b) => a-b);
    while(people.length !== 0){
         if(people.length === 1){
            cnt ++;
            break;
        }
            
        if(people[people.length-1] + people[0] <= limit){
                people.shift();
                people.pop();
                cnt++;
        }
        else{
            people.pop();
            cnt++;
        }
        
    }
    return cnt;
}