def solution(citations):
    citations.sort()
    ans = 0
    max_c = citations[-1] if citations else 0

    for h in range(max_c + 1):
        up = sum(c >= h for c in citations)   
        down = sum(c <= h for c in citations) 
        if up >= h and down <= h:
            ans = h
    return ans