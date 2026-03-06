function solution(msg) {
    const dict = new Map();
    const answer = [];

    for (let i = 0; i < 26; i++) {
        dict.set(String.fromCharCode(65 + i), i + 1);
    }

    let nextIndex = 27;

    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];

        while (i + 1 < msg.length && dict.has(w + msg[i + 1])) {
            w += msg[i + 1];
            i++;
        }

        answer.push(dict.get(w));

        if (i + 1 < msg.length) {
            dict.set(w + msg[i + 1], nextIndex++);
        }
    }

    return answer;
}