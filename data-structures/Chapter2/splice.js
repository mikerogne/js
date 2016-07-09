var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Before:", numbers);

numbers.splice(5, 3); // Remove 5, 6, 7 from the array.
console.log("After splice:", numbers);

// Now let's add some numbers back in... where those were removed.
numbers.splice(5, 0, 2, 3, 4);

console.log("After splicing again:", numbers);
