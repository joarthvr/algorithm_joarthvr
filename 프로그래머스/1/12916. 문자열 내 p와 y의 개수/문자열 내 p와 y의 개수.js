function solution(s){
    let p = 0;
    let y = 0;
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p++;
        }
        if(s[i] === "y"){
            y++;
        }
    }
    
     return p === y ? true : false
}