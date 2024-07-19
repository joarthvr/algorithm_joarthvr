
function solution(arr)
{
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1])
            continue;
            ans.push(arr[i]);
    }
   return ans;
}