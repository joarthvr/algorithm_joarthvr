function solution(elements) {
    const set = new Set([...elements]);
    const len = elements.length;
    set.add(elements.reduce((acc,e) => acc += e ,0));

    for(let i = 2; i < len; i++){
        for(let j = 0 ; j < len; j++){
            let repeat = i;
            let sum = 0;
            let standard = j;
            while(repeat--){
                sum += elements[standard % len]
                standard++;
            }
            set.add(sum);
        }
    }
    
    return set.size;
}




 
