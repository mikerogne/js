/*
 First two numbers in a fibonacci sequence are 1. After that, each value is the sum of the previous two numbers.
 For example, [1, 1, 2, 3, 5, 8 ...]
 Because 1+1=2, 2+1=3, 3+2=5, 5+3=8, ...
 */
var fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

fibonacci.forEach(function (value, index) {
    console.log(value);
});
