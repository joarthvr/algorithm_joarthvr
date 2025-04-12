function solution(numbers) {
   return 45 - numbers.reduce((a,e) => a+e,0);
}