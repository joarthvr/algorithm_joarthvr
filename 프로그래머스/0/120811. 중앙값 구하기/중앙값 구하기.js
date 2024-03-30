function solution(array) {
    var a = array.length;
    var b = Math.floor(array.length/2);
    for(let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length; i++){
        if (array[i] < array[j]){
            let t = 0;
            t = array[j];
            array[j] = array[i];
            array[i] = t;
        }
        else{
            continue;
        }
    }}
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    return array[b];
}

//전체 배열을 돌면서 가장 큰 값은 맨 뒤에 가장 작은 값은 맨 앞에 놓는 식으로 배열을 정렬
//배열의 크기를 나눠 가운데 인덱스의 값을 리턴한다