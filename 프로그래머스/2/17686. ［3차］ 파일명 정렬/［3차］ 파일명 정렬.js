function solution(files) {
    const files2 = files;
    
    function person(file){
    this.HEAD = file.slice(0,3),
    this.NUMBER = file.slice(0,3),
    this.TAIL = file.slice(0,3),
}
    const arr = [];
    
    for(let i = 0; i < files.length; i++){
        const person = new person(files[i]);
        arr.push(person)
    }
    console.log(arr)
}

// 100글자 이내, 영어 대소문자, 숫자, 공백, 마침표, 빼기 부호 만으로 이루어짐
// 파일명은 영문자로 시작하며 숫자를 하나 이상 포함하고 있음
// 파일명을 헤드 넘버 테일 세부분으로 나눈다