class Stack {
    constructor() {
        this.size = 0;
        this.storage = new Object();
    }
    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }
    pop() {
        if (this.size === 0) return;
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }
    top() {
        return this.size === 0 ? undefined : this.storage[this.size];
    }
}

function solution(s) {
    let stack = new Stack();
    let cnt = 0;
    let strArray = s.split('');
    
    for (let j = 0; j < s.length; j++) {
        stack = new Stack();  // 매 회전마다 스택 초기화
        let isBalanced = true;  // 균형 여부 체크

        for (let i = 0; i < strArray.length; i++) {
            stack.push(strArray[i]);
            if (stack.size > 1) {
                let top1 = stack.pop();
                let top2 = stack.pop();

                if ((top2 === "[" && top1 === "]") || (top2 === "(" && top1 === ")") || (top2 === "{" && top1 === "}")) {
                    continue;
                } else {
                    stack.push(top2);
                    stack.push(top1);
                }
            }
        }
        
        if (stack.size === 0) cnt++;  // 스택이 비어있다면 균형이 맞음
        
        // 문자열 회전
        strArray.push(strArray.shift());
    }
    
    return cnt;
}
