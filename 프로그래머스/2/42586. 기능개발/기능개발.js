function solution(progresses, speeds) {
    let time = [];
    let ans = [];
    let j =1;
    for(let i = 0; i < progresses.length; i++){
        time.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    console.log(time)
    for(let i = 0; i < progresses.length; i++){
        if(time[i+1] - time[i] > 0 || i === time.length-1){
            ans.push(1);
        }
        if(time[i+1] - time[i] <= 0){
            while(time[i+j] - time[i] <= 0){
                j++;
            }
            ans.push(j);
            i = i + j-1;
            j = 1;
            
        }
        
    }
    return ans;
}

// Math.ceil(100 - progress[] / speed)