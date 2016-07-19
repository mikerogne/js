const fs       = require('fs');
const filename = process.argv[2] || 'target.txt';

// For some reason, fs.watch() wouldn't work after the first time it reported a change.
// fs.watchFile() does work, however.
fs.watchFile(filename, function () {
    console.log(`File '${filename}' just changed!`);
});

console.log(`Now watching '${filename}' for changes...`);
