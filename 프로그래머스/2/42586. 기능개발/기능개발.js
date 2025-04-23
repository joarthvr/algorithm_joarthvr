function solution(progresses, speeds) {
    const deploy = [];
    const result = [];
    for(let i = 0; i < progresses.length; i++){
        const complete = Math.ceil((100 - progresses[i]) / speeds[i]);
        deploy.push(complete);
    }
    // console.log(deploy)
    let prev = 0;
    let next = 1;
    for(let i = 0; i < deploy.length; i++){
        if(deploy[next] <= deploy[prev]){
            next++;
        }
        else if(i === deploy.length-1 || deploy[next] > deploy[prev]){
            result.push(next-prev);
            // console.log(prev,next,i)
            prev = next
            next++;
        }
        
    }
    return result;
}