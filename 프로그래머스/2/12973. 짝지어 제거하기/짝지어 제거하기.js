class Stack{
    constructor(){
        this.storage = new Object();
        this.size = 0;
    }
    push(element){
        this.size++;
        this.storage[this.size] = element;
    }
    pop(){
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }
    top(){
        return this.storage[this.size];
    }
}
function solution(s){
    const stack = new Stack();
    for(let i = 0; i < s.length; i++){
        if(stack.top() === s[i]){
            stack.pop();
            continue;
        }
        else{
            stack.push(s[i]);
            continue;
        }}
return stack.size > 0 ? 0 : 1; 
}
   
    