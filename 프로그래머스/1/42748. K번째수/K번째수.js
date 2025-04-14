function solution(array, commands) {
    const result = [];
    for(const command of commands){
        let strIdx = command[0];
        let endIdx = command[1];
        let targetIdx = command[2];
        
        const tmpArr = array.slice(strIdx-1,endIdx).sort((a,b)=>a-b);
        result.push(tmpArr[targetIdx-1]);
    }
    return result;
}