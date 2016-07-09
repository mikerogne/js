var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.reverse(); // put them out of order.
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort(function(a, b) { return a-b; });
console.log(numbers);

