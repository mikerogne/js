var Queue = require('./queue.js');

var queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

queue.print(queue);
console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();
queue.print();
