function solution(dartResult) {
    // 문자열을 배열로 변환하고, 숫자는 정수로 변환
    dartResult = dartResult.split("").map(e => Math.floor(e) >= 0 ? Math.floor(e) : e);
    console.log(dartResult)
    const result = [];  // 최종 결과를 저장할 배열
    let currentGroup = [];  // 현재 처리 중인 그룹을 저장할 배열
    const numSave = [];
    let currentNumber = '';

    for (let i = 0; i < dartResult.length; i++) {
        const element = dartResult[i];
        
        if (typeof element === 'number') {
            // 숫자인 경우, 현재 숫자에 추가
            currentNumber += element;
        } else {
            // 문자인 경우, 이전에 처리 중이던 숫자가 있다면 그룹에 추가
            if (currentNumber !== '') {
                // 이전 그룹이 있다면 결과에 추가
                if (currentGroup.length > 0) {
                    result.push(currentGroup);
                    currentGroup = [];
                }
                currentGroup.push(parseInt(currentNumber));
                currentNumber = '';
            }
            // 현재 문자를 그룹에 추가
            currentGroup.push(element);
        }
    }

    // 마지막 그룹 처리
    if (currentNumber !== '') {
        currentGroup.push(parseInt(currentNumber));
    }
    if (currentGroup.length > 0) {
        result.push(currentGroup);
    }

    
    // console.log(result[0].length);
    for(let i = 0; i < result.length; i++){
        const element = result[i];
            let middleResult = 0;
            const num = element[0];
            console.log(num);
            const pow = element[1];
            console.log(pow)
            if(pow === "S")
                middleResult += num;
            if(pow === "D")
                middleResult += Math.pow(num, 2);
            if(pow === "T")
                middleResult += Math.pow(num, 3);
            
            if(element.length >= 3){
                const bonus = element[2];
                console.log(bonus)
                if(bonus === "*"){
                    middleResult = middleResult*2
                    numSave[numSave.length-1] ? numSave[numSave.length-1] =numSave[numSave.length-1]*2 
                    : numSave[numSave.length-1] =numSave[numSave.length-1];
                }
                if(bonus === "#"){
                    middleResult = -middleResult;
                }
                    
            }
            numSave.push(middleResult);
            
    
       
    }
    console.log(numSave)
    const allSum = numSave.reduce((acc,e)=>{return acc += e;},0);
    console.log(allSum);
    return allSum;

}
