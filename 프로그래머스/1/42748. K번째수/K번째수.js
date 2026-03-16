function solution(array, commands) {
    const ans = []
    for(const command of commands){
        const [s,e,n] = command;
        const sliced = array.slice(s-1,e).sort((a,b) => a-b);
        ans.push(sliced[n-1]);
    }
    return ans;
}