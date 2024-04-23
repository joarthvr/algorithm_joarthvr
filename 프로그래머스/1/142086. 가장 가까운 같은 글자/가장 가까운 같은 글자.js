function solution(s) {
    let ans = new Array(s.length).fill(-1);
    s = s.split("");
    s.forEach((e,idx)=>{
      for(let j = 0; j < idx; j++){
           if(s[j] == e){
               ans[idx] = idx - j;
           }
       }
        });
    
       return ans;
   }