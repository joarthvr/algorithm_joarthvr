function solution(s) {
    let count = 0;
    let deletedZ = 0;
    function calculate(e){
        if(e === 1){
            return 1;
        }
        deletedZ++;
    }
    while(s !== "1"){
        s = s.split("").filter((e) => {
            if(e === "0") deletedZ++;
            return e === "1";
        });
        s = s.length.toString(2);
        count++;
    }
    return [count, deletedZ];
}

//s가 1이 될때까지 변환 횟수와 제거된 0의 개수


