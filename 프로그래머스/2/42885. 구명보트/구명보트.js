function solution(people, limit) {
    let ans = 0;
    const l = people.length;
    people.sort((a,b)=>b-a);
    let fI = 0;
    let eI = l - 1;
    const escaped = new Array(l).fill(false);
    while(fI <= eI){
        if(people[fI] + people[eI] <= limit){
            eI--;
        }
        fI++;
        ans++;
    }
    return ans;
}

// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
// 그리디 ==> 1정렬 2최적
