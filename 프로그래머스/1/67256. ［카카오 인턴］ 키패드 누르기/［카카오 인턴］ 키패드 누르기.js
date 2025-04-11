function solution(numbers, hand) {
    let result = '';
    // 키패드 좌표 설정 (0부터 9까지, *은 10, #은 11로 표현)
    const keypad = {
        1 : [0,0], 4 : [0,1], 7 : [0,2], "*" : [0,3], 
        2 : [1,0], 5 : [1,1], 8 : [1,2], 0 : [1,3],
        3 : [2,0], 6 : [2,1], 9 : [2,2], "#" : [2,3],
    }
    let leftPos = keypad["*"];
    let rightPos = keypad['#'];
    
    const preferHand = hand === "right" ? "R" : "L";
    
    for(const num of numbers){
        
         //1,4,7이면 왼손
        if(num === 1 || num === 4 || num === 7){
            result += "L"     
            leftPos = keypad[num];
            continue;
        }
          //369이면 오른손
        if(num === 3 || num === 6 || num === 9){
            result += "R"     
            rightPos = keypad[num];
            continue;
        }
        
        //가운데 일 때
        let centerPos = keypad[num];
        let distFromLeft = Math.abs(centerPos[0] - leftPos[0]) + Math.abs(centerPos[1] - leftPos[1]); 
        let distFromRight = Math.abs(centerPos[0] - rightPos[0]) + Math.abs(centerPos[1] - rightPos[1]);
        
        console.log(distFromLeft, distFromRight);
        if(distFromLeft > distFromRight){
            result += "R"     
            rightPos = keypad[num];
            continue;
        }
        if(distFromLeft < distFromRight){
            result += "L"     
            leftPos = keypad[num];
            continue;
        }
        if(distFromLeft === distFromRight){
            result += preferHand;     
            preferHand === "R" ? rightPos = centerPos : leftPos = centerPos;
            continue;
        }
        
    } 
    return result;
}
   
    
    
    
