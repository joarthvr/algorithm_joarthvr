function solution(topping) {
    let result = 0;
    let toppingKindSet=new Set(topping);
    let compareSet=new Set();
    let counter=new Array(10001).fill(0);
    
    if(topping.length===1){
        return result;
    }
    
    topping.forEach(e=>{
        counter[e]++;
    })
    
    topping.forEach(v=>{
        if(counter[v]>=1){
            counter[v]--;
        }
        if(counter[v]===0){
            toppingKindSet.delete(v);
        }    
        compareSet.add(v);    
        if(toppingKindSet.size===compareSet.size){
            result++;
        }
    })
    
    return result;
}