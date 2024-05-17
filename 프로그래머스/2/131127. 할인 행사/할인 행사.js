function solution(want, number, discount){
  let cnt = 0;
  let i = 0;
  const period = 10;

  while(i <= discount.length - period){
    let arr = discount.slice(i, i+period);
    let vaild = true;

    for(let j = 0; j < want.length; j++){
        let count = arr.reduce((a, e) => {
        if(want[j] === e)
          a++;
        return a;
      }, 0);
      if(count !== number[j]){
        vaild = false;
        break;
      }
    }
    if(vaild)
      cnt++;
      
       i++;
  }
   
  return cnt;
}