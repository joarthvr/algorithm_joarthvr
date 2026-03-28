class Heap {
    constructor(compare){
        this.heap = [];
        this.compare = compare;
    }

    push(value){
        this.heap.push(value);
        let idx = this.heap.length - 1;

        while (idx > 0) {
            const pI = Math.floor((idx - 1) / 2);
            if (this.compare(this.heap[idx], this.heap[pI]) >= 0) break;

            [this.heap[pI], this.heap[idx]] = [this.heap[idx], this.heap[pI]];
            idx = pI;
        }
    }

    pop(){
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const t = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;
        const len = this.heap.length;

        while (true) {
            const l = idx * 2 + 1;
            const r = idx * 2 + 2;
            let c = idx;

            if (l < len && this.compare(this.heap[l], this.heap[c]) < 0) c = l;
            if (r < len && this.compare(this.heap[r], this.heap[c]) < 0) c = r;
            if (c === idx) break;

            [this.heap[idx], this.heap[c]] = [this.heap[c], this.heap[idx]];
            idx = c;
        }

        return t;
    }

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }
}

function solution(operations) {
    const minH = new Heap((a, b) => a - b);
    const maxH = new Heap((a, b) => b - a);
    const countMap = new Map();

    const cleanHeap = (heap) => {
        while (heap.size() > 0) {
            const value = heap.peek();
            if ((countMap.get(value) || 0) > 0) break;
            heap.pop();
        }
    };

    const removeValue = (value) => {
        const count = countMap.get(value);
        if (count === 1) countMap.delete(value);
        else countMap.set(value, count - 1);
    };

    for (const operation of operations) {
        const [command, raw] = operation.split(" ");
        const num = Number(raw);

        if (command === "I") {
            minH.push(num);
            maxH.push(num);
            countMap.set(num, (countMap.get(num) || 0) + 1);
        } else {
            if (countMap.size === 0) continue;

            if (num === 1) {
                cleanHeap(maxH);
                const maxValue = maxH.pop();
                removeValue(maxValue);
            } else {
                cleanHeap(minH);
                const minValue = minH.pop();
                removeValue(minValue);
            }
        }
    }

    cleanHeap(minH);
    cleanHeap(maxH);

    if (countMap.size === 0) return [0, 0];
    return [maxH.peek(), minH.peek()];
}