def solution(array, commands):
    ans = []
    for start, end, target in commands:
        ans.append(sorted(array[start-1: end])[target-1])
    return ans
        