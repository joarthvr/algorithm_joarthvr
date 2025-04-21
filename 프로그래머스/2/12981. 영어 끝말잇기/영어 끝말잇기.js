function solution(n, words) {
    let turn = 1;
    const len = words.length;
    const set = new Set();
    
    for(let i = 0; i < len; i++){
        if(i < len - 1){
            console.log(words[i][words[i].length-1], words[i+1][0], i)
            if(set.has(words[i])) return [i%n+1, Math.floor(i / n) + 1];
            if(words[i][words[i].length-1] !== words[i+1][0]) return [(i+1)%n+1, Math.floor((i+1) / n) + 1];    
            set.add(words[i]);    
        }
        else{
            if(set.has(words[i])) return [i%n+1, Math.floor(i / n) + 1];
            if(words[i][words[i][0]] !== words[i-1][words.length-1]) return [(i+1)%n+1, Math.floor((i+1) / n) + 1];
        }

    }
    return [0,0];
}