var Stack = require('./stack.js');

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

function divideBy2(decNumber) {
    var remStack     = new Stack();
    var binaryString = '';
    var rem;

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);

        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
