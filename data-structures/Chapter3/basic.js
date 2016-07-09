var Stack = require('./stack.js');

var stack = new Stack();
console.log("New stack created. isEmpty():", stack.isEmpty());

stack.push(5);
stack.push(8);

console.log("Added 5, 8. peek():", stack.peek());

stack.push(11);
console.log("size():", stack.size());
console.log("isEmpty():", stack.isEmpty());

stack.push(15);
stack.pop();
stack.pop();
console.log("Pushed 15, popped twice. size():", stack.size());
stack.print();
