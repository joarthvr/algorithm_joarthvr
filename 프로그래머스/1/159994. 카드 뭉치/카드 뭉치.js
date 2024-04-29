function solution(cards1, cards2, goal) {
    
    for(let i = 0; i < 20; i++){
        if(goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
            console.log(goal)
            continue;
        }
        if(goal[0] === cards2[0]){
            goal.shift();
            cards2.shift();
            console.log(goal)
            continue;
        }
    }
    return goal.length === 0? "Yes" : "No";
}