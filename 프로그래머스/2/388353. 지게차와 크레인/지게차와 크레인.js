function solution(storage, requests) {
    // 테두리 추가한 2차원 배열로 변환
    const n = storage.length;
    if (n === 0) return 0;
    const m = storage[0].length;
    let map = [];
    for (let i = 0; i < n + 2; i++) {
        map[i] = [];
        for (let j = 0; j < m + 2; j++) {
            if (i === 0 || j === 0 || i === n + 1 || j === m + 1) {
                map[i][j] = '0';
            } else {
                map[i][j] = storage[i-1][j-1];
            }
        }
    }

    function isOutside(row, col) {
        const dir = [[-1,0],[1,0],[0,-1],[0,1]];
        for (let [dr, dc] of dir) {
            if (map[row + dr][col + dc] === '0') return true;
        }
        return false;
    }

    function updateOutside() {
        const queue = [];
        const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
        // 테두리에서 시작
        for (let i = 0; i < n + 2; i++) {
            for (let j = 0; j < m + 2; j++) {
                if (map[i][j] === '0') {
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }
        // BFS로 외부와 연결된 빈 공간을 '0'으로 변경
        while (queue.length) {
            const [r, c] = queue.shift();
            for (let [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 1 && nr <= n && nc >= 1 && nc <= m && !visited[nr][nc]) {
                    if (map[nr][nc] === '1') {
                        map[nr][nc] = '0';
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
        }
    }

    for (let req of requests) {
        if (req.length === 1) {
            // 지게차: 외부와 연결된 컨테이너 제거
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= m; j++) {
                    if (map[i][j] === req && isOutside(i, j)) {
                        map[i][j] = '1'; // 임시 빈 공간으로 변경
                    }
                }
            }
            updateOutside(); // 빈 공간 중 외부와 연결된 곳을 '0'으로 갱신
        } else {
            // 크레인: 해당 컨테이너 모두 제거
            const target = req[0];
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= m; j++) {
                    if (map[i][j] === target) {
                        map[i][j] = '1';
                    }
                }
            }
            updateOutside(); // 빈 공간 중 외부와 연결된 곳을 '0'으로 갱신
        }
    }

    // 남은 컨테이너 수 세기
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (map[i][j] !== '0' && map[i][j] !== '1') answer++;
        }
    }
    return answer;
}
