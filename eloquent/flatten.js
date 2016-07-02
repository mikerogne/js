var arrays    = [[1, 2, 3], [4, 5], [6]];
// OUTPUT: [1, 2, 3, 4, 5, 6]
var flattened = arrays.reduce(function (prev, current) {
    console.log("Prev", prev);
    console.log("Current", current, "\n");
    return prev.concat(current);
});

console.log("Flattened", flattened);
