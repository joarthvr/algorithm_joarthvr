function solution(lottos, win_nums) {
    const score = [6, 6, 5, 4, 3, 2, 1];  // 맞춘 개수에 따른 순위 배열
    const min = lottos.filter(num => win_nums.includes(num)).length;  // 최소 맞춘 개수
    const zeroCnt = lottos.filter(num => num === 0).length;  // 0의 개수
    const max = min + zeroCnt;  // 최대로 맞출 수 있는 개수

    return [score[max], score[min]];  // 최고 순위와 최저 순위 반환
}