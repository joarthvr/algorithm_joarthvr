function solution(num_list) {
    let answer = [];
    let size = num_list.length -1;
    let i =0;
    console.log(size);
    while(size >= 0){
        answer[i] = num_list[size];
        i++;
        size--;
    }
    
    return answer;
}