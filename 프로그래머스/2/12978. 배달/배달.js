function solution(N, road, K) {
    const g = Array.from({length : N + 1}, ()=> []);
    
    //인접 리스트
    for(const [a,b,c] of road){
        g[a].push([b,c]);
        g[b].push([a,c]);
    }

    const dist = new Array(N+1).fill(Infinity);
    dist[1] = 0; 
    const heap = new Heap((a,b)=>a[0]-b[0]);
    heap.push([0,1])// [거리, 위치]
    
    while(heap.size() > 0){
        const [cost, cur] = heap.pop();
        if(cost > dist[cur]) continue;
        for(const [next,weight] of g[cur]){
            const newCost = cost + weight;
            if(newCost < dist[next]){
                dist[next] = newCost;
                heap.push([newCost, next]);
            }
        }
    }
    console.log(11)
    return dist.filter(d => d <= K).length;
}

class Heap{
    constructor(compare){
        this.heap = [];
        this.compare = compare;
    }
    push(v){
        this.heap.push(v);
        let idx = this.heap.length - 1;
        while(idx > 0){
            const p = Math.floor((idx - 1) / 2);
            if(this.compare(this.heap[p], this.heap[idx]) <= 0)break;
            [this.heap[p], this.heap[idx]] = [this.heap[idx], this.heap[p]];
            idx = p;
        }
    }
    pop(){
        if(this.heap.length === 0) return undefined;
        if(this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        const len = this.heap.length;
        let idx = 0;
        
        while(true){
            const l = idx * 2 + 1;
            const r = idx * 2 + 2;
            let c = idx;
            
            if(l < len && this.compare(this.heap[l], this.heap[c]) < 0) c = l;
            if(r < len && this.compare(this.heap[r], this.heap[c]) < 0) c = r;
            
            if(c === idx) break;
            
            [this.heap[c], this.heap[idx]] = [this.heap[idx], this.heap[c]]; 
            idx = c;
        }
        
        return top;
        
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0];
    }
}