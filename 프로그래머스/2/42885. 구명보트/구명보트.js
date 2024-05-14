function solution(people, limit) {
    let count = 0;
    people = people.sort((a,b)=> a-b);
    while(people.length !== 0){
    if(people[0] + people[people.length - 1] <= limit) { 
      count++ 
      people.shift();
      people.pop();
    } else {
      count++
      people.pop();  
    }
    }
    return count;
}