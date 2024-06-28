function solution(lottos, win_nums) {
    let score = [6,6,5,4,3,2,1];
    let min = 0;
    let max = 0;
    let zeroCnt = lottos.reduce((count, number, index) => {
    if (number === 0) {
        count++;
    }
    return count;
}, 0);
// 0을 모두 제거한 새로운 배열을 생성
lottos = lottos.filter(number => number !== 0);
    console.log(zeroCnt);
    for(let i = 0; i < win_nums.length; i++){
        for(let j = 0; j < lottos.length; j++){
            if(win_nums.includes(lottos[j])){
                lottos.splice(lottos.indexOf(lottos[j]),1)
                min++;
                continue;
            }
        }
    }
    // console.log(min)
    min + 2 > 6 ? max = 6 : max = min+zeroCnt;
    return [score[max], score[min]];
}