var numbers = process.argv.slice(2, process.argv.length).map(function(val) { return +val; });

console.log(numbers.reduce(function(prev, curr) { return prev + curr; }));
