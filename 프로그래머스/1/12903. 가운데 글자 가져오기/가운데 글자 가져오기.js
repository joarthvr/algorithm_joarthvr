function solution(s) {
    let size = s.length;
    let mid;
    if(size % 2 == 0){
        mid = size / 2;
        return s.substr(mid-1, 2);
    }
    else{
        return s[Math.floor(size / 2)];
    }
}

//짝수면 가운데 두 글자
//홀수면 가운데 글자 