class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    push(v) {
        this.heap.push(v);
        let idx = this.heap.length - 1;

        while (idx > 0) {
            const pI = Math.floor((idx - 1) / 2);
            if (this.compare(this.heap[pI], this.heap[idx]) <= 0) break;

            [this.heap[idx], this.heap[pI]] = [this.heap[pI], this.heap[idx]];
            idx = pI;
        }
    }

    pop() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
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

        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function solution(n, works) {
    const total = works.reduce((sum, work) => sum + work, 0);
    if (total <= n) return 0;

    const maxHeap = new Heap((a, b) => b - a);

    for (const w of works) {
        maxHeap.push(w);
    }

    for (let i = 0; i < n; i++) {
        let max = maxHeap.pop();
        if (max <= 0) return 0;

        maxHeap.push(max - 1);
    }

    return maxHeap.heap.reduce((acc, cur) => acc + cur * cur, 0);
}