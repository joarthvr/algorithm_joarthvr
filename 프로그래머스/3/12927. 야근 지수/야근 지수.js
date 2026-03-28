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

        const t = this.heap[0];
        this.heap[0] = this.heap.pop();

        const len = this.heap.length;
        let idx = 0;

        while (true) {
            const l = idx * 2 + 1;
            const r = idx * 2 + 2;
            let c = idx;

            if (l < len && this.compare(this.heap[l], this.heap[c]) < 0) c = l;
            if (r < len && this.compare(this.heap[r], this.heap[c]) < 0) c = r;

            if (idx === c) break;

            [this.heap[idx], this.heap[c]] = [this.heap[c], this.heap[idx]];
            idx = c;
        }

        return t;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
function solution(n, works) {
    const maxHeap = new Heap((a,b) => b-a);
    for(const w of works) maxHeap.push(w);
    for(let i = 0; i < n; i++){
        let max = maxHeap.pop();
        if(max === 0) return 0;
        max--;
        maxHeap.push(max);
    }
    return maxHeap.heap.reduce((acc, cur)=> acc += cur ** 2 ,0)
}
