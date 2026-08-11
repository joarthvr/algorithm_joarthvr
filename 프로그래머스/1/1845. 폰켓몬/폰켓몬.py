def solution(nums):
    p_cate = len(set(nums))
    target = len(nums) / 2
    if p_cate > target:
        return target
    else:
        return p_cate
    
