function solution(topping) {
    let ans = 0;
    
    const ls = new Set();
    const rm = new Map();
    
    for(const t of topping){
        rm.set(t, (rm.get(t) || 0) + 1);
    }
    for(let i = 0; i < topping.length - 1; i++){
        const t = topping[i];
        ls.add(t);
        rm.set(t, rm.get(t) - 1);
        if(rm.get(t) === 0) rm.delete(t);
        
        if(ls.size === rm.size) ans++;
    }
    return ans;
}

