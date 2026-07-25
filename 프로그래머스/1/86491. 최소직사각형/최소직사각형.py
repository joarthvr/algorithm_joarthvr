def solution(sizes):
    answer = 0
    x, y = 0, 0
    for a,b in sizes:
        candidate = sorted([a,b])
        if x < candidate[0]:
            x = candidate[0]
        if y < candidate[1]:
            y = candidate[1]
        print(candidate, x,y)
    return x*y
