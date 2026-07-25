def solution(answers):
    patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    ans, result = [], []
    max = 0
    for j, p in enumerate(patterns):
        cnt = 0
        for i, e in enumerate(answers):
            if p[i % len(p)] == e:
                cnt += 1
        if(max < cnt):
            ans = [j+1]
            max = cnt
        elif max == cnt:
            ans.append(j+1)
    return ans