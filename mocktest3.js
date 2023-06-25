class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack.pop();
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }