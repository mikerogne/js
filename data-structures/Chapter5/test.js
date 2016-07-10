var LinkedList = require('./LinkedList.js');

var list = new LinkedList();

list.append('First');
list.append('Second');
list.append('Third');

console.log("size():", list.size());
console.log("list", list.toString());

list.remove('Second');
console.log(list.toString());
