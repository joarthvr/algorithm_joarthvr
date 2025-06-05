function solution(data, col, row_begin, row_end) {
    //1. 정렬
    data = data.sort((a,b) => {
                    if(a[col -1] === b[col -1]){
                        return b[0] - a[0];
                    }else{
                     return a[col - 1] - b[col - 1];
                    }
    });
    //2. 계산
    let result = 0;
    let xorValue = 0;
    
    for(let i = row_begin -1; i < row_end; i++){
        let s_i = 0;
        for(let j = 0; j < data[i].length; j++){
            s_i += data[i][j] % (i + 1);   
        }
        xorValue = xorValue ^ s_i;
    }            
  return xorValue
  
  
}