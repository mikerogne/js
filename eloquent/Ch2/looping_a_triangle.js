var string = '#';

for(var i = 0; i < 7; i++) {
    console.log(string);

    string += '#';
}

// Book solution:
for(var line = '#'; line.length < 8; line += '#') {
    console.log(line);
}
