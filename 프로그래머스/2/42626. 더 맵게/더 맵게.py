import heapq
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        if len(scoville) < 2:
            return -1
        e1 = heapq.heappop(scoville)
        e2 = heapq.heappop(scoville)
        mixed = e1 + e2 * 2
        heapq.heappush(scoville, mixed)
        answer += 1
    return answer
