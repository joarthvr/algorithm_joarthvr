function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let minLen = Infinity;
    let result = [];

    while (right < sequence.length) {
        if (sum === k) {
            const len = right - left + 1;
            if (len < minLen) {
                minLen = len;
                result = [left, right];
            }
            sum -= sequence[left++];
            if (right + 1 < sequence.length) sum += sequence[++right];
        } else if (sum < k) {
            if (right + 1 < sequence.length) sum += sequence[++right];
            else break;
        } else {
            sum -= sequence[left++];
        }
    }
    
    return result;
}