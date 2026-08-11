def solution(clothes):
    count_map = {}
    ans = 1
    for name, kind in clothes:
        count_map[kind] = count_map.get(kind, 0) + 1
        
    for count in count_map.values():
        ans *= count + 1
        
    return ans - 1