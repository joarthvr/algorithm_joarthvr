function solution(sizes) {
    let large = [];
    let small = [];
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b) => a-b);
        large.push(Math.floor(sizes[i][1]));
        small.push(Math.floor(sizes[i][0]));
    }
    let l = Math.max(...large);
    let s = Math.max(...small);
    return l*s;
    
}
