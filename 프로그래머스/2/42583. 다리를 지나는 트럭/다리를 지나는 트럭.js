function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridge_sum = 0;

    while (truck_weights.length > 0 || bridge_sum > 0) {
        // 시간 증가
        time++;

        // 다리에서 나가는 트럭 처리
        bridge_sum -= bridge.shift();

        // 새 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push(truck);
            bridge_sum += truck;
        } else {
            bridge.push(0);
        }
    }

    return time;
}