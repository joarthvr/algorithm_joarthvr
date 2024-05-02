function solution(s) {
    s = s.split(" ");
    let k = [];
    s.forEach((e)=>{
        k.push(Math.floor(e));
    })
    const min = (Math.min(...k))
    const max = (Math.max(...k))
    
    return (min) + " " + (max);
}