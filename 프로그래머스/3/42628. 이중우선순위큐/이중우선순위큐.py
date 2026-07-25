import heapq

def solution(operations):
    min_heap, max_heap = [], []
    for op in operations:
        command, value = op.split()
        value = int(value)
        if command == 'I':
            heapq.heappush(min_heap, value)
            heapq.heappush(max_heap, -value)
            continue
        if command == 'D' and value == 1 and max_heap:
            max_val = -heapq.heappop(max_heap)   
            min_heap.remove(max_val)
            continue
        if command == 'D' and value == -1 and min_heap:
            min_val = heapq.heappop(min_heap)
            max_heap.remove(-min_val)             
            continue
    return [-heapq.heappop(max_heap), heapq.heappop(min_heap)] if min_heap else [0, 0]