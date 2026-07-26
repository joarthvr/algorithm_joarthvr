def solution(k, dungeons):
    n = len(dungeons)
    answer = 0

    # 스택 원소: (현재 피로도, 들어간 던전 수, visited 리스트)
    stack = [(k, 0, [False] * n)]

    while stack:
        fatigue, cnt, visited = stack.pop()
        # 최댓값 갱신
        if cnt > answer:
            answer = cnt

        # 다음으로 갈 수 있는 던전들을 모두 push
        for i in range(n):
            need, cost = dungeons[i]
            if not visited[i] and fatigue >= need:
                new_visited = visited[:]   # 새 경로용 복사
                new_visited[i] = True
                stack.append((fatigue - cost, cnt + 1, new_visited))

    return answer