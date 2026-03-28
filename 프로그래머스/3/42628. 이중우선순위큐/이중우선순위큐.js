function solution(operations) {
    const map = new Map();
    let min = Infinity;
    let max = -Infinity;
    
    for (const order of operations) {
        const [o, raw] = order.split(" ");
        const n = Number(raw);

        if (o === "I") {
            map.set(n, (map.get(n) || 0) + 1);
            min = Math.min(min, n);
            max = Math.max(max, n);
        } 
        else if (o === "D" && map.size > 0) {
            if (n === 1) {
                const count = map.get(max);
                if (count > 1) map.set(max, count - 1);
                else map.delete(max);
            } else if (n === -1) {
                const count = map.get(min);
                if (count > 1) map.set(min, count - 1);
                else map.delete(min);
            }

            if (map.size === 0) {
                min = Infinity;
                max = -Infinity;
            } else {
                const keys = [...map.keys()];
                min = Math.min(...keys);
                max = Math.max(...keys);
            }
        }
    }

    return map.size > 0 ? [max, min] : [0, 0];
}