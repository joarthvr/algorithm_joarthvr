function combination(items, idx, k, list, result) {
    if(items.length === k){
        result.push(items);
        return;
    }
    for (let I = idx; I < list.length; I++) {
        combination([...items, list[I]], I + 1, k, list, result);
    }
}

function solution(number) {
    let result = []
    combination([], 0, 3, number, result);
    console.log(result);
    result = result.map(e => e.reduce((acc,element) => acc + element, 0));
    let cnt = 0;
    result.forEach(e => {if(e === 0){
            cnt++;
    }});
    return cnt;
}
