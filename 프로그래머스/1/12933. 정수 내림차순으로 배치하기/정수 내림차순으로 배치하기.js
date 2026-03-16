function solution(n) {
    return Number(`${n}`.split("").sort((a,b) => Number(b) - Number(a)).join(""));
}