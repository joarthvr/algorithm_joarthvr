function solution(files) {
    // 파일명을 분석하여 HEAD, NUMBER, TAIL로 분리
    const parsedFiles = files.map((file, index) => {
        let head = '';
        let number = '';
        let tail = '';
        let i = 0;

        // HEAD 추출
        while (i < file.length && !isDigit(file[i])) {
            head += file[i];
            i++;
        }

        // NUMBER 추출
        while (i < file.length && isDigit(file[i]) && number.length < 5) {
            number += file[i];
            i++;
        }

        // TAIL 추출
        tail = file.slice(i);

        return { 
            originalIndex: index, 
            head: head.toLowerCase(), 
            number: parseInt(number), 
            tail 
        };
    });

    // 정렬
    parsedFiles.sort((a, b) => {
        // HEAD 비교
        if (a.head < b.head) return -1;
        if (a.head > b.head) return 1;

        // NUMBER 비교
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;

        // 원래 순서 유지
        return a.originalIndex - b.originalIndex;
    });

    // 정렬된 순서대로 원래 파일명 반환
    return parsedFiles.map(file => files[file.originalIndex]);
}

function isDigit(char) {
    return char >= '0' && char <= '9';
}