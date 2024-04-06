function solution(num_list) {
    let answer = [];
    let size = num_list.length;
    let i = 0;
    let even = 0;
    let odd = 0;
    while(i < size){
        if(num_list[i] % 2 === 0){
            even++;
        }
        else{
            odd++;
        }
        i++;
    }
    answer[0] = even;
    answer[1] = odd;
    return answer;
}