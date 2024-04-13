function solution(numbers) {
    const total = 45;
    const sum = numbers.reduce((s,e,i) =>{
        return s += e;
    }, 0)
    return total - sum;
}