function solution(phone_number) {
    let s = '';
    let front = phone_number.slice(0, phone_number.length-4).replaceAll(phone_number,"*");
    let back = phone_number.slice(phone_number.length-4);
    for(let i = 0; i < front.length; i++){
        s += '*';
    }
    return s + back;
}