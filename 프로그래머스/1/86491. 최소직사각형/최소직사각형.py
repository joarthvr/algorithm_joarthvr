def solution(sizes):
    width, height = 0, 0
    for a, b in sizes:
        if a > b:
            a, b = b, a
        width = max(width, a)
        height = max(height, b)
    return width * height