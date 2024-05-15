function solution(arr) {
    arr = arr.sort((a,b) => b-a);
    let tmp = 0;
    let tmp2 = 0;
    while(arr.length !== 1){
        tmp = arr[0] * arr[1];
        tmp2 = arr[1];
        while(tmp2){
            if(arr[0] % tmp2 === 0 && arr[1] % tmp2 === 0){
               break; 
            }
            else{
                tmp2--;
            }
        }
            arr.shift();
            arr.shift();
            arr.unshift(tmp / tmp2);
    }
    return arr[0];
}

//두 수의 곱은 최대 공약수와 최소 공배수의 곱
//14*8 = 112 == 2 * 56
//336 = 2 * 118
// 336 = 2 * 168
