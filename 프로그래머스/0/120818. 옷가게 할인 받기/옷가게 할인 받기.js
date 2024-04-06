function solution(price) {
   if(price < 100000){
       return price;
   }
    else if(price >= 100000 && price < 300000){
        return Math.floor(price - price * 0.05);
    }
    else if(price >= 300000 && price < 500000){
        return Math.floor(price - price * 0.1);
    }
   else if(price >= 500000 && price <= 1000000){
        return Math.floor(price - price * 0.2);
    }
}


