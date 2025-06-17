function solution(picks, minerals) {
    let [dia, iron, stone] = picks;
    const totalTools = (dia + iron + stone)*5;
    const actualMinerals = minerals.slice(0, totalTools);
    
    const groups = [];
    for(let i = 0; i < actualMinerals.length; i += 5){
        const slicedMinerals = actualMinerals.slice(i,i + 5);
        let cost = 0;
        for(let j = 0; j < slicedMinerals.length; j++){
            if(slicedMinerals[j] === 'diamond') cost += 25;
            if(slicedMinerals[j] === 'iron') cost += 5;
            if(slicedMinerals[j] === 'stone') cost += 1;
        }
        groups.push({slicedMinerals, cost})
    }
    groups.sort((a,b) => b.cost - a.cost);
    console.log(groups)
    let result = 0;
    for(const group of groups){
        for(let i = 0; i < group.slicedMinerals.length; i++){
            if(dia > 0){
              if(group.slicedMinerals[i] === 'diamond') result += 1;
                if(group.slicedMinerals[i] === 'iron') result += 1;
                if(group.slicedMinerals[i] === 'stone') result += 1;
            }
            else if(iron > 0){
                if(group.slicedMinerals[i] === 'diamond') result += 5;
                if(group.slicedMinerals[i] === 'iron') result += 1;
                if(group.slicedMinerals[i] === 'stone') result += 1;
            }
            else if(stone > 0){
                if(group.slicedMinerals[i] === 'diamond') result += 25;
                if(group.slicedMinerals[i] === 'iron') result += 5;
                if(group.slicedMinerals[i] === 'stone') result += 1;
            }
            
            console.log(dia,iron,stone, result)
        }
        if(dia > 0) {
            dia--;
        }
        else if(iron > 0){
            iron--;
        }else if(stone > 0){
            stone--;
        }
    }
    return result;
}