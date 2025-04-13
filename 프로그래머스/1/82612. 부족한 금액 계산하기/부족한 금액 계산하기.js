function solution(price, money, count) {
    let i = 1;
    while(count--){
        money -= (price * i);   
        i++;
   }
    
    return money <= 0 ? -money : 0; 
}