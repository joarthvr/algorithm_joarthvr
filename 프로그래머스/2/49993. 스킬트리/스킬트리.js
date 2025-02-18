function solution(skill, skill_trees) {
    let result = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        let isValid = true;
        let skillIndex = 0;
        
        // 현재 스킬트리의 각 스킬을 순회
        for(let j = 0; j < skill_trees[i].length; j++) {
            const currentSkill = skill_trees[i][j];
            
            // 필수 스킬에 포함된 스킬인 경우
            if(skill.includes(currentSkill)) {
                // 현재 배워야 할 스킬과 다르면 invalid
                if(currentSkill !== skill[skillIndex]) {
                    isValid = false;
                    break;
                }
                skillIndex++;
            }
        }
        
        if(isValid) result++;
    }
    
    return result;
}