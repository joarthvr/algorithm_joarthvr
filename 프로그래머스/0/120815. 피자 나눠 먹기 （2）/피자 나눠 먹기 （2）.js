function solution(n) {
    let pizza = 6;
    let pizzaCnt = 1;
    while(pizza % n !== 0){
        pizza += 6; // 피자 조각을 6개씩 증가시킴
        pizzaCnt++;
    }
    return pizzaCnt; // n명이 공유할 수 있는 피자 조각의 수 반환
}
