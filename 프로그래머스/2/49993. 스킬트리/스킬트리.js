function solution(skill, skill_trees) {
    let result = 0;
    
    for(const tree of skill_trees) {
        const queue = [...skill];
        let isValid = true;
        for(const s of tree) {
            if(skill.includes(s)) {
                if(s !== queue[0]) {
                    isValid = false;
                    break;
                }
                queue.shift();
            }
        }
        if(isValid) result++;
    }
    return result;
}