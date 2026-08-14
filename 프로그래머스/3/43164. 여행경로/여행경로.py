def solution(tickets):
    adj_list = {}
    for s, e in tickets:
        adj_list.setdefault(s, []).append(e)
    for key in adj_list:
        adj_list[key].sort()

    def dfs(cur, path):
        if len(path) == len(tickets) + 1:
            return path
        for i in range(len(adj_list.get(cur, []))):
            nxt = adj_list[cur].pop(i)
            result = dfs(nxt, path + [nxt])
            if result:
                return result
            adj_list[cur].insert(i, nxt)
        return None

    return dfs("ICN", ["ICN"])