function solution(skill, skill_trees) {
    skill = skill.split("");
    const filteredSkill = [];
    const arr = [""];  // 빈 문자열 추가!
    let strSum = ''
    
    for(let i = 0; i < skill.length; i++){
        strSum += skill[i];
        arr.push(strSum);
    }
    
    for(let i = 0; i < skill_trees.length; i++){
        let tmp = '';
        for(let j = 0; j < skill_trees[i].length; j++){
            // skill에 포함된 문자인지 확인
            if(skill.includes(skill_trees[i][j])){
                tmp += skill_trees[i][j];
            }    
        }
        filteredSkill.push(tmp)
    }
    
    let result = 0;
    for(let i = 0; i < filteredSkill.length; i++){
        if(arr.includes(filteredSkill[i])) result++;
    }
    return result;
}