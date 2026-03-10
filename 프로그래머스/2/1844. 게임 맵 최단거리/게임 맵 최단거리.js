class Queue {
    constructor() {
        this.q = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(v) {this.q[this.tail++] = v;}
    dequeue() {return this.head === this.tail ? undefined : this.q[this.head++];}
    isEmpty() {return this.head === this.tail;}
}

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const q = new Queue();

    q.enqueue([0, 0, 1]);
    visited[0][0] = true;

    const directions = [[-1,0],[1,0],[0,-1],[0,1]];

    while (!q.isEmpty()) {
        const [x, y, dist] = q.dequeue();

        if (x === n - 1 && y === m - 1) return dist;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && nx < n &&
                ny >= 0 && ny < m &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true;
                q.enqueue([nx, ny, dist + 1]);
            }
        }
    }
    console.log(1)
    return -1;
}