function solution(phone_number) {
    const size = phone_number.length
    let a = phone_number.substring(size-4,size);
    let b = '';
    for(let i = 0; i < size-4; i++){
        b += "*";
    }
    return b+a;
}