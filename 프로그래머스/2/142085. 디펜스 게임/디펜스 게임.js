class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }
    
    bubbleUp(index) {
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[parentIndex] >= this.heap[index]) break;
            
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    bubbleDown(index) {
        while(true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let largest = index;
            
            if(leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            
            if(rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            
            if(largest === index) break;
            
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
    
    size() {
        return this.heap.length;
    }
}

function solution(n, k, enemy) {
    if(k >= enemy.length) return enemy.length;
    
    const maxHeap = new MaxHeap();
    let soldiers = n;
    let invincibility = k;
    
    for(let i = 0; i < enemy.length; i++) {
        soldiers -= enemy[i];
        maxHeap.push(enemy[i]);
        
        if(soldiers < 0) {
            if(invincibility > 0) {
                const largest = maxHeap.pop();
                soldiers += largest;
                invincibility--;
            } else {
                return i;
            }
        }
    }
    
    return enemy.length;
}