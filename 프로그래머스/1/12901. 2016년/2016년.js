function solution(a, b) {
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let i =0;
    let sum = 0
    while(1<a){
        
        sum += month[i];
        i++;
        a--;
    }
    sum = sum + b -1;
    let dday = Math.floor(sum % 7);
    console.log(sum);
    return day[dday];
}

//2016년 1월 1일은 금요일 
//a월 b일의 요일을 리턴
//31,29,31,30,31,30,31,31,30,31,30,31

