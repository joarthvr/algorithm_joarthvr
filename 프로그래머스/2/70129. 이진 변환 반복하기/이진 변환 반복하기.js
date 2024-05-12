function solution(s) {
    let cnt = 0;
    let zerocnt = 0;
    let size = s.length;
    while(s !== '1'){
    size = s.length;
    s = s.replaceAll("0","")
    zerocnt +=  size - s.length;
    s = Math.floor(s.length).toString(2);
    cnt++;
    }
    const ans = [cnt, zerocnt];
    return ans;
}