from collections import deque

def solution(priorities, location):
    q = deque([(p, i) for i, p in enumerate(priorities)])
    answer = 0

    while q:
        cur = q.popleft()
        if cur[0] < max(q, key=lambda x: x[0])[0]:
            q.append(cur)
        else:
            answer += 1
            if cur[1] == location:
                return answer