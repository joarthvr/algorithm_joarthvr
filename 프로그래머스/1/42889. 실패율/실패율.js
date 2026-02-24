function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const map = new Map();
  for (const stage of stages) {
    map.set(stage, (map.get(stage) || 0) + 1);
  }

  const result = [];
  let players = stages.length;

  for (let i = 1; i <= N; i++) {
    const unclear = map.get(i) || 0;
    const failure = players === 0 ? 0 : unclear / players;
    result.push({ stage: i, failure });
    players -= unclear;
  }

  result.sort((a, b) => {
    if (b.failure === a.failure) return a.stage - b.stage;
    return b.failure - a.failure;
  });

  return result.map((x) => x.stage);
}
