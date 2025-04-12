function solution(seoul) {
    const idx = String(seoul.findIndex((a) =>a === "Kim"));
    return "김서방은 " + idx+"에 있다";
}