from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = deque([0] * bridge_length)
    trucks = deque(truck_weights)
    bridge_weight = 0
    total_trucks = len(truck_weights)
    passed = 0

    while passed < total_trucks:
        answer += 1
        out = bridge.popleft()
        if out != 0:
            passed += 1
        bridge_weight -= out

        if trucks and bridge_weight + trucks[0] <= weight:
            t = trucks.popleft()
            bridge.append(t)
            bridge_weight += t
        else:
            bridge.append(0)

    return answer