function solution(nums) {
    const set = new Set(nums);
    let uniqueArr = [...set];
    uniqueArr = uniqueArr.sort((a,b) => a-b);
    
    if(uniqueArr.length > nums.length/2){
        return nums.length / 2;
    }
    else{
        return uniqueArr.length;
    }
}



