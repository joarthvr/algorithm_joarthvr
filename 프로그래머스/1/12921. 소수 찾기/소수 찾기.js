function solution(n) {
    let result = 0;
    const arr = new Array(n+1).fill(true); 
    const end = Math.sqrt(n);
    
    for(let i = 2; i <= end; i++){
        if(arr[i] === false){
            continue;
        }
        
        for(let j = i * 2; j <= n; j+=i){
            if(arr[j]){
                arr[j] = false;
            }
        }
        
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            result++;
        }
    }
    return result-2;
}