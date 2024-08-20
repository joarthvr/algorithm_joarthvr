function solution(ingredient) {
    let result = 0;
    let i = 0;
        while(i < ingredient.length){
        // const order = ingredient[i];
        if(ingredient[i-3] === 1 && ingredient[i-2]===2 && ingredient[i-1] === 3&&ingredient[i] ===1){
            result++;
            ingredient.splice(i-3,4);
            i = i-3;
        }
        i++;
    }
    return result;
}

//빵 -> 야채 -> 고기 -> 빵
//1231