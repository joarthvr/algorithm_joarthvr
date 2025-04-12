function solution(num) {
    let i = 500;
    while(--i){
        if(num === 1) return 499 - i ; 
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
    return -1;
    
}