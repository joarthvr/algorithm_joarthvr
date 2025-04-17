function solution(s) {
    s = s.split(" ").map((e) => Number(e));
    const max = Math.max(...s);
    const min = Math.min(...s);
    return `${min} ${max}`
    
}