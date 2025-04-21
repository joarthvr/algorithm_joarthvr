function solution(arr) {
    let i = 1;
   while(i++){
       let t = true;
       for(const n of arr){
           if(i % n !== 0) t = false;
       }
       if(t) return i;
   }
    
}

