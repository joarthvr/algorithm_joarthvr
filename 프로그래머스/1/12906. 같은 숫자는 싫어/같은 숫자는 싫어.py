def solution(arr):
    answer = []
    for e in arr:
        if len(answer) < 1:
            answer.append(e)
            continue
        if answer[-1] != e:
            answer.append(e)
            
    
    return answer