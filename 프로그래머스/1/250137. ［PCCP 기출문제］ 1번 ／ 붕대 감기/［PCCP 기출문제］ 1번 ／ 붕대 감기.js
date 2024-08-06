function solution(bandage, health, attacks) {
   const TOTALTIME = attacks[attacks.length-1][0];
   const attacksObj = attacks.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
    }, {});
    const howLongMaintain = bandage[0];
    const recoveryAmount = bandage[1];
    const bonusRecovery = bandage[2];
    let count = 0;
    const MAXHEALTH = health
   for(let i = 0; i <= TOTALTIME; i++){
       count++;
       if(attacksObj[i]){
           count = 0;
           health -= attacksObj[i];
           if(health <= 0 )
           return -1;
           console.log("어택 " + health)
           continue;
       }
       if(count === howLongMaintain){
           count = 0;
           health += recoveryAmount + bonusRecovery;
           if(health >= MAXHEALTH)
           health = MAXHEALTH
           if(health <= 0 )
           return -1;
           console.log("보너스 " + health)
           continue;
       }
        if(health <= 0 )
           return -1;
       health += recoveryAmount
       if(health >= MAXHEALTH)
           health = MAXHEALTH
       console.log(health)
   }
       return health;
}


//[시전시간,1초당 회목량, 추가회복략]
//최대체력
//몬드터의 [공격시간, 피해량]