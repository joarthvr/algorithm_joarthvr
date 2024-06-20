function solution(s, n) {
    // s = s.split("");
    // console.log(s)
    // s = s.join('')
    // console.log(s)
    // console.log(' '.charCodeAt());
    // console.log(String.fromCharCode(32))
    let j;
    let c;
    let k;
    let a;
    let y = [];
    for(let i = 0; i < s.length; i++){
        j = s[i].charCodeAt();
        if(j >=65 && j<= 90){
        if(j+n > 90){
            k = j+n -91;
            c = 65 + k;
            a = String.fromCharCode(c);
            y.push(a);
            continue;
        }
        else{
            c = j + n;
           a = String.fromCharCode(c);
            y.push(a);
            continue;
        }
        }
        if(j >=97 && j<= 122){
        if(j + n > 122){
            k = j+n - 123;
            c = 97 + k;
            a = String.fromCharCode(c);
            y.push(a);
            continue;
        }
        else{
            c = j + n;
            a = String.fromCharCode(c);
            y.push(a);
            continue;
        }}
        if(j === 32){
            y.push(" ");
            continue;
        }
        
    }
    y = y.join("")
    return y;
}
//공백은 밀어도 공백
//소문자, 대문자, 공백으로만 이뤄짐

