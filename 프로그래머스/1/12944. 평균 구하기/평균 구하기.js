function solution(arr) {
    let sum = 0
    arr.forEach((element, index) =>{
        sum += element;
    })
    return sum/arr.length;
}