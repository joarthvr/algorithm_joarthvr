function solution(s) {
    class Stack {
        constructor() {
            this.storage = {};
            this.size = 0;
        }
        push(element) {
            this.size++;
            this.storage[this.size] = element;
        }
        pop() {
            let removed = this.storage[this.size];
            delete this.storage[this.size];
            this.size--;
            return removed;
        }
        top() {
            return this.storage[this.size];
        }
    }

    s = s.split('');
    const stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        if (stack.top() === "(" && s[i] === ")") {
            stack.pop(); // 올바른 괄호 쌍을 찾으면 스택에서 pop
        } else {
            stack.push(s[i]); // 그 외의 경우에는 스택에 push
        }
    }
    return stack.size > 0 ? false : true
}
// ?????

    
    
    
