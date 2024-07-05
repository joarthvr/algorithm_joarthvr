function solution(nums) {
    const uniqueCount = new Set(nums).size;
    const maxAllowed = nums.length / 2;
    
    return Math.min(uniqueCount, maxAllowed);
}