from collections import deque

def solution(begin, target, words):
    n = len(words)
    word_len = len(begin)
    visited = [False] * n  
    cnt = 0
    q = deque()
    q.append((begin,0))
    
    def is_one_diff(s1, s2):
        return sum(a != b for a, b in zip(s1, s2)) == 1
        
    while q:
        cur, cnt = q.popleft()
        if cur == target:
            return cnt
        
        for i in range(n):
            if visited[i]:
                continue
            if is_one_diff(cur, words[i]):
                q.append((words[i],cnt+1))
                visited[i] = True
    return 0