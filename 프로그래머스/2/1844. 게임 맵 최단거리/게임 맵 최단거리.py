from collections import deque

def solution(maps):
    q = deque()
    n = len(maps)
    m = len(maps[0])
    dr = [1, -1, 0, 0]
    dc = [0, 0, 1, -1]
    visited = [[False] * m for _ in range(n)]
    visited[0][0] = True
    q.append([0,0,1])
    
    while q:
        r, c, cnt = q.popleft()
        if r == n -1 and c == m-1:
            return cnt
        
        for d in range(4):    
            nxt_r, nxt_c = r + dr[d], c + dc[d]
            if nxt_r < 0 or nxt_r >= n or nxt_c < 0 or nxt_c >= m:
                continue
            if maps[nxt_r][nxt_c] == 0 or visited[nxt_r][nxt_c]:
                continue
            q.append([nxt_r, nxt_c, cnt + 1])
            visited[nxt_r][nxt_c] = True

    return -1