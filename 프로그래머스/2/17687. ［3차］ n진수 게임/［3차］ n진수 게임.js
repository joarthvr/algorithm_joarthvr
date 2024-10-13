function solution(n, t, m, p) {
    let result = '';
    let gameString = '';
    let num = 0;

    while (gameString.length < t * m) {
        gameString += num.toString(n).toUpperCase();
        num++;
    }

    for (let i = p - 1; i < t * m; i += m) {
        result += gameString[i];
    }

    return result.slice(0, t);
}