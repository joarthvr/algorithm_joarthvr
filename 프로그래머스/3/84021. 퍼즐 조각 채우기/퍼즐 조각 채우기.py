from collections import deque

dr = [1, -1, 0, 0]
dc = [0, 0, 1, -1]


def normalize(cells):
    min_r = min(r for r, c in cells)
    min_c = min(c for r, c in cells)

    return tuple(sorted(
        (r - min_r, c - min_c)
        for r, c in cells
    ))


def get_shapes(board, target):
    n = len(board)
    visited = [[False] * n for _ in range(n)]
    shapes = []

    for sr in range(n):
        for sc in range(n):
            if visited[sr][sc] or board[sr][sc] != target:
                continue

            q = deque([(sr, sc)])
            visited[sr][sc] = True
            cells = []

            while q:
                r, c = q.popleft()
                cells.append((r, c))

                for k in range(4):
                    nr = r + dr[k]
                    nc = c + dc[k]

                    if (0 <= nr < n and 0 <= nc < n
                        and not visited[nr][nc]
                        and board[nr][nc] == target):
                        visited[nr][nc] = True
                        q.append((nr, nc))

            shapes.append(normalize(cells))

    return shapes


def rotate(shape):
    # (r, c)를 시계 방향으로 90도 회전: (c, -r)
    rotated = [(c, -r) for r, c in shape]
    return normalize(rotated)


def is_fit(piece, hole):
    for _ in range(4):
        if piece == hole:
            return True
        piece = rotate(piece)

    return False


def solution(game_board, table):
    holes = get_shapes(game_board, 0)
    pieces = get_shapes(table, 1)

    answer = 0
    used = [False] * len(pieces)

    for hole in holes:
        for i, piece in enumerate(pieces):
            if used[i]:
                continue

            if len(hole) != len(piece):
                continue

            if is_fit(piece, hole):
                used[i] = True
                answer += len(hole)
                break

    return answer