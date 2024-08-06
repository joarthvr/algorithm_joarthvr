function solution(bandage, health, attacks) {
  const TOTAL_TIME = attacks[attacks.length - 1][0];
  const attackTimes = attacks.reduce((acc, [time, damage]) => {
    acc[time] = damage;
    return acc;
  }, {});
  
  const [maintainTime, recoveryAmount, bonusRecovery] = bandage;
  let healthRecoveryCounter = 0;
  const MAX_HEALTH = health;
  
  // 함수: 공격을 처리하고, 체력을 감소시키는 함수
  const applyAttack = (currentHealth, damage) => {
    currentHealth -= damage;
    return currentHealth;
  };
  
  // 함수: 체력을 회복시키는 함수
  const recoverHealth = (currentHealth, amount) => {
    currentHealth += amount;
    return Math.min(currentHealth, MAX_HEALTH); // 최대 체력을 넘지 않도록 함
  };
  
  for (let time = 0; time <= TOTAL_TIME; time++) {
    healthRecoveryCounter++;
    
    // 공격이 있는 경우
    if (attackTimes[time]) {
      healthRecoveryCounter = 0;
      health = applyAttack(health, attackTimes[time]);
      if (health <= 0) return -1;
      continue;
    }
    
    // 체력 유지 시간이 경과한 경우
    if (healthRecoveryCounter === maintainTime) {
      healthRecoveryCounter = 0;
      health = recoverHealth(health, recoveryAmount + bonusRecovery);
      if (health <= 0) return -1;
      continue;
    }
    
    // 0 이하일 경우
    health = recoverHealth(health, recoveryAmount);
    if (health <= 0) return -1;
  }
  
  return health;
}
