function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var a;
    var b;
    var c;
    a = numer1 * denom2 + numer2 * denom1;
    b = denom1 * denom2;
    if (a > b){
        c = a;
    }
    else{
        c = b;
    }
    
    while(c){
        if(a % c == 0 && b % c == 0){
            a = a/c;
            b = b/c;
            answer[0] = a;
            answer[1] = b;
            break;
        }
    c--;}
    return answer;
}