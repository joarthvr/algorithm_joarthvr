function solution(participant, completion) {
    const object = {};
    
    for(let i = 0; i < participant.length; i++){
        object[participant[i]] = (object[participant[i]] || 0) + 1
    }
    for(const p of completion){
        object[p] = object[p] - 1;          
    }
   for(let i = 0; i < participant.length; i++){
       if(object[participant[i]]){
           return participant[i];
       }   
   }
}