function solution(clothes) {
    const obj = {};
    for(const [clo,cate] of clothes){
        obj[cate] = (obj[cate] || 1) +1
    } 
    const num = Object.values(obj).reduce((acc,cur)=> acc * cur,1);
    return num - 1;
    
    
}