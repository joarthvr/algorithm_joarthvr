function solution(begin, target, words) {
    if(!words.includes(target)) return 0;

    const visited = new Array(words.length).fill(false);
    const queue = [[begin, 0]];

    while(queue.length){
        const [word, depth] = queue.shift();

        if(word === target) return depth;

        for(let i = 0; i < words.length; i++){
            if(visited[i]) continue;

            let diff = 0;

            for(let j = 0; j < word.length; j++){
                if(word[j] !== words[i][j]) diff++;
            }

            if(diff === 1){
                visited[i] = true;
                queue.push([words[i], depth + 1]);
            }
        }
    }

    return 0;
}