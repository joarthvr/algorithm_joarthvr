import heapq

def solution(jobs):
    jobs.sort(key=lambda x: x[0])
    heap = []
    current_time, i, answer = 0, 0, 0
    start = -1

    while i < len(jobs) or heap:
        while i < len(jobs) and jobs[i][0] <= current_time:
            heapq.heappush(heap, (jobs[i][1], jobs[i][0]))
            i += 1
        if heap:
            duration, request_time = heapq.heappop(heap)
            current_time += duration
            answer += current_time - request_time
        else:
            current_time = jobs[i][0]

    return answer // len(jobs)