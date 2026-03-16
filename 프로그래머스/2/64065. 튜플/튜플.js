function solution(s) {
    const obj = {};
    s = s.slice(2,s.length-2).split('},{').map((e) => e.split(",")).join().split(',');
    console.log(s)
    for(let i = 0; i < s.length; i++){
        if(Number(s[i]) >= 1 && Number(s[i]) < 100000){
            obj[s[i]] = (obj[s[i]] || 0) + 1;
        }
        
    }
    const keys = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
    return keys.map(Number)
}
