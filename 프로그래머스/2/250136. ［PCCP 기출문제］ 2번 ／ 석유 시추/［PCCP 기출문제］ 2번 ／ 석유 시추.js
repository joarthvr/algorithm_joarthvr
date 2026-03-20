function solution(land) {
    const row = land.length;
    const col = land[0].length;
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const oilByCol = Array(col).fill(0);

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (land[r][c] === 0 || visited[r][c]) continue;

            const stack = [[r, c]];
            visited[r][c] = true;

            let size = 0;
            const cols = new Set();

            while (stack.length > 0) {
                const [cr, cc] = stack.pop();
                size++;
                cols.add(cc);

                for (const [dr, dc] of dirs) {
                    const nr = cr + dr;
                    const nc = cc + dc;

                    if (nr < 0 || nr >= row || nc < 0 || nc >= col) continue;
                    if (visited[nr][nc] || land[nr][nc] === 0) continue;

                    visited[nr][nc] = true;
                    stack.push([nr, nc]);
                }
            }

            for (const column of cols) {
                oilByCol[column] += size;
            }
        }
    }

    return Math.max(...oilByCol);
}