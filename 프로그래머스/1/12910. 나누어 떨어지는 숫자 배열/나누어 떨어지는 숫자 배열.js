function solution(arr, divisor) {
    let ans = [];
   for(const i of arr){
       if(i % divisor === 0){
           ans.push(i);
       }
   }
    if(ans.length === 0){
        return [-1];
    }
    ans = ans.sort((a,b) => a-b);
    console.log(ans);
    return ans;
}