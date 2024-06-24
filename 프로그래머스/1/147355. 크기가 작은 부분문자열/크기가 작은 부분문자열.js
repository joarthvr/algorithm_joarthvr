function solution(t, p) {
    let split = [];
    for(let i = 0; i < t.length; i++){
        if(i + p.length > t.length)
            break;
        split.push(t.slice(i,i+p.length));
    }
    
   let result = split.reduce((acc, element) => {
    if (Math.floor(element) <= Math.floor(p)) {
        acc++;
    }
    return acc;
}, 0);
    return result;
}
//p의 크기로 t를 나눔
//p의 크기보다 작거나 같은 수를 셈

