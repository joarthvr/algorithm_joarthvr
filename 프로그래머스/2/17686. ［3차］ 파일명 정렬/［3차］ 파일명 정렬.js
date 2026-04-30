function solution(files) {
    const parsedFiles = files.map((file, index) => {
        let head = '';
        let number = '';
        let i = 0;

        // HEAD 추출
        while (i < file.length && isNaN(parseInt(file[i]))) {
            head += file[i];
            i++;
        }
    
        // NUMBER 추출
        while (i < file.length && !isNaN(parseInt(file[i])) && number.length < 5) {
            number += file[i];
            i++;
        }

        return { 
            originalIndex: index, 
            head: head.toLowerCase(), 
            number: parseInt(number)
        };
    });
    parsedFiles.sort((a, b) => {
        const headCompare = a.head.localeCompare(b.head);
        if (headCompare !== 0) return headCompare;
        
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
        
        return a.originalIndex - b.originalIndex;
    });
    console.log(1)
    return parsedFiles.map(file => files[file.originalIndex]);
}