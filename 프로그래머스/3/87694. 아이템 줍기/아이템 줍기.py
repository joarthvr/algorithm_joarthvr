from collections import deque
def solution(rectangle, characterX, characterY, itemX, itemY):
    N = 102
    board = [['.'] * N for _ in range(N)]
    for rec in rectangle:
        x1,y1,x2,y2 = [v * 2 for v in rec]
        for x in range(x1, x2+1):
            for y in range(y1, y2+1):
                if x == x1 or x == x2 or y == y1 or y == y2:
                    board[x][y] =  "#"
    for rec in rectangle:   
        x1,y1,x2,y2 = [v * 2 for v in rec]
        for x in range(x1+1, x2):
            for y in range(y1+1, y2):
                board[x][y] = '.'
    characterX, characterY, itemX, itemY = map(lambda v: v*2, (characterX, characterY, itemX, itemY))
    
    dr = [0,0,1,-1]
    dc = [1,-1,0,0]
    visited = [[False] * N for _ in range(N)]
    visited[characterX][characterY] = True
    q = deque([(characterX, characterY, 0)])
    
    while q:
        cur_x, cur_y, cnt = q.popleft()
        if (cur_x, cur_y) == (itemX, itemY):
            return cnt // 2
        for d in range(4):
            nxt_x, nxt_y = cur_x + dr[d], cur_y + dc[d]
            if visited[nxt_x][nxt_y] or board[nxt_x][nxt_y] == '.':
                continue
            if nxt_x < 0 or nxt_x >= 102 or nxt_y < 0 or nxt_y >= 102:
                continue
            q.append((nxt_x, nxt_y, cnt + 1))
            visited[nxt_x][nxt_y] = True
            
    