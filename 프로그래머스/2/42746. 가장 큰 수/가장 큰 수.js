function solution(numbers) {
    function compare(a,b){
        const n1 = Number(`${a}${b}`);
        const n2 = Number(`${b}${a}`);
        return n1 > n2 ? -1 : 1;
    }
    
    numbers = numbers.sort(compare).join("");
    return Number(numbers) === 0 ? "0" : numbers;
}
