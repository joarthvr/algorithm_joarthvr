function solution(A,B){
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);
    const sum = A.reduce((acc,curr,i) => acc += curr * B[i],0);
    return sum;
    
}