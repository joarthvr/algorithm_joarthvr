function solution(s, skip, index) {
    let spelling = ['a','b','c','d','e','f','g','h','i',
                    'j','k','l','m','n','o','p','q','r',
                    's','t','u','v','w','x','y','z'];
    for(let i =0; i < skip.length; i++){
        if(spelling.includes(skip[i])){
            spelling.splice(spelling.indexOf(skip[i]),1)
        }
    }
    let result = ""
    for(let i = 0; i < s.length; i++){
        let skippedIndex = (spelling.indexOf(s[i])+index)%spelling.length;
        result += spelling[skippedIndex];
    }
    return result;
}