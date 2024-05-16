function solution(n)
{
    let cnt = 0;
    while(n !== 0){
        if(n % 2 !== 0){
            n = Math.floor(n/2);
            cnt++;
        }
        else{
             n = n / 2;
        }
    }
    return cnt;
}

//5000 2500 1250 625 312(+1) 156 78 39 19(+1) 9(+1) 4(+1) 2 1(+1) 0