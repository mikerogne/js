process.stdin.on('readable', function () {
    let input = process.stdin.read();

    if (input !== null)
        process.stdout.write(input);

    let command = input.toString().trim();
    if (command === 'exit')
        process.exit(0);
});
