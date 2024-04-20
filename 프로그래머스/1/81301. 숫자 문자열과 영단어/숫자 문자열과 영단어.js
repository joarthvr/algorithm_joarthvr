function solution(s) {
    const alphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < s.length; i++){
        alphabet.forEach((e,i) => {
        if(s.search(e) != -1){
            s = s.replace(e,i);
        }
        else{
            return s;
        }
    });
    }
    
    return Math.floor(s);
}