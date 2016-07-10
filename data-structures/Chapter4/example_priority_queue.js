var PriorityQueue = require('./priority_queue.js');

var queue = new PriorityQueue();

queue.enqueue("John", 2);
queue.enqueue("Jack", 1);
queue.enqueue("Camila", 1);
queue.print();

