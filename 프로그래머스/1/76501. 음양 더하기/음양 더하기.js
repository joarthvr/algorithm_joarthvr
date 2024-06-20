function solution(absolutes, signs) {
    const result = absolutes.reduce((acc,element,index) =>{
        return signs[index] === true ? acc+=element : acc -= element;
    },0);
    return result;
}