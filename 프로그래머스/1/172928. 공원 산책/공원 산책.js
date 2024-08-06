function solution(park, routes) {
    let START;

    // 시작 위치 찾기
    park.forEach((e, i) => {
        const location = e.split("").findIndex(char => char === "S");
        if (location !== -1) {
            START = { row: i, col: location }; // 행과 열의 위치를 저장
        }
    });

    const eastOrWest = (way) => {
        let howManyToGo = parseInt(way[2]);
        if (way[0] === "E") {
            if (START.col + howManyToGo >= park[0].length || 
                park[START.row].slice(START.col, START.col + howManyToGo + 1).includes("X")) {
                return;
            }
            START.col += howManyToGo;
        }
        if (way[0] === "W") {
            if (START.col - howManyToGo < 0 || 
                park[START.row].slice(START.col - howManyToGo, START.col).includes("X")) {
                return;
            }
            START.col -= howManyToGo;
        }
    };

    const northOrSouth = (way) => {
        let howManyToGo = parseInt(way[2]);
        if (way[0] === "N") {
            if (START.row - howManyToGo < 0 || 
                park.slice(START.row - howManyToGo, START.row).some(row => row[START.col] === "X")) {
                return;
            }
            START.row -= howManyToGo;
        }
        if (way[0] === "S") {
            if (START.row + howManyToGo >= park.length || 
                park.slice(START.row, START.row + howManyToGo + 1).some(row => row[START.col] === "X")) {
                return;
            }
            START.row += howManyToGo;
        }
    };

    // 주어진 경로를 순회하며 이동
    routes.forEach((e) => {
        if (e[0] === "E" || e[0] === "W") {
            eastOrWest(e);
        }
        if (e[0] === "N" || e[0] === "S") {
            northOrSouth(e);
        }
    });

    return [START.row, START.col]; // 최종 위치를 반환
}

