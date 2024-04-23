function solution(array, commands) {
    let ans = [];
    let tmp = [];
    for(let i = 0; i < commands.length; i++){
       tmp = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b);
       ans[i] = tmp[commands[i][2]-1]
    }
    return ans;
}