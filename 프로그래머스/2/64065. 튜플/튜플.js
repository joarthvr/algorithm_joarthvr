function solution(s) {
    s = s.substring(2, s.length-2);
    s = s.split('},{').map((e) => e.split(',')).sort((a,b) => a.length - b.length);

    const result = [];
    for(const element of s){
        for(let i = 0; i < element.length; i++){
            const candidate = Number(element[i]);
            if(!result.includes(candidate)) result.push(candidate);
        }
    }
    return result;
}