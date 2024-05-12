function solution(s) {
    s = s.split(" ");
    let k = ""
    s = s.map((e,i) =>{
        if (e.length > 0) {
            return e[0].toUpperCase() + e.slice(1).toLowerCase();
        } else {
            return "";
        }
    });
    s.forEach((e,i)=>{
        if(i===0){
            k+=e;
        }
        else{
        k += " " + e;
        }
    })
    return k;
}