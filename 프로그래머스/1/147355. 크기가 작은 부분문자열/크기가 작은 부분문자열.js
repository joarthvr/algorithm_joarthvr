function solution(t, p) {

    let cnt = 0;
    t = t.toString();
    let tmp = 0;
   for(let i = 0; i < t.length; i++){
      tmp = t.slice(i, i+p.length);
       if(tmp.length === p.length && Math.floor(tmp) <= p) {
            console.log(tmp);
           cnt ++;
       }
   }
    return cnt;
}

