function solution(phone_book) {
    const set = new Set(phone_book);

    for (const phone of phone_book) {
        let prefix = "";
        for (const char of phone) {
            prefix += char;
            if (prefix !== phone && set.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}