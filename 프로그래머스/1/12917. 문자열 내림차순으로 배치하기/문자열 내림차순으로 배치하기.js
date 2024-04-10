function solution(s) {
    let k = []
    for(let i = 0; i < s.length; i++){
         k[i] = s[i].charCodeAt();
        
    }
   
    k.sort((a,b) => b-a);
    
     for(let i = 0; i < k.length; i++){
         k[i] = String.fromCharCode(k[i]);
        
    }
    let ans ="";
    for(let i = 0; i < k.length; i++){
        ans +=(k[i]);
    }
     return ans;
   
}