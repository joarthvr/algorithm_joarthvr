function solution(elements) {
    const size = elements.length;
    let set = new Set();
    let sum = 0;
    for(let i = 1; i <= size; i++){
        sum = 0;
        for(let j = 0; j < size; j++){
              if (j === 0) { 
                for (let k = 0; k<i; k++) {
                    sum += elements[k];
                }
            }
            else{
                sum -= elements[j-1];
                sum += elements[(j+i-1) % size];
                 
                }
               set.add(sum);
            }
        }
        return set.size;
    }




 
