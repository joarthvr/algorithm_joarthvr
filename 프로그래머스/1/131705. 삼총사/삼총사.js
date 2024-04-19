
function solution(number) {
    const size = number.length;
    let sum = 0;
    let cnt = 0;
  for(let i = 0; i < size; i++){
      for(let j = i+1; j < size; j++){
          for(let k = j+1; k < size; k++){
              sum = 0;
             sum = number[i] + number[j] + number[k];
              if(sum === 0){
                  cnt++;
              }
          }
      }
  }
    return cnt;
}

//3개를 추출
//3개를 더해서 0이 되면 cnt++