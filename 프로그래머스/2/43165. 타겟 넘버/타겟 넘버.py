def solution(numbers, target):
    answer = 0
    n = len(numbers)
    
    def dfs(total, depth):
        nonlocal answer
        if depth == n:
            if total == target:
                answer += 1
            return
        dfs(total + numbers[depth], depth + 1)
        dfs(total - numbers[depth], depth + 1)        
    dfs(0,0)
    return answer

