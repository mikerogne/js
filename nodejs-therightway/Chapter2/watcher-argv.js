'use strict';

const fs       = require('fs');
const spawn    = require('child_process').spawn;
const filename = process.argv[2] || 'target.txt';

// For some reason, fs.watch() wouldn't work after the first time it reported a change.
// fs.watchFile() does work, however.
fs.watchFile(filename, function () {
    let ls     = spawn('ls', ['-lh', filename]);
    let output = '';

    ls.stdout.on('data', function (chunk) {
        output += chunk.toString();
    });

    ls.on('close', function () {
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});

console.log(`Now watching '${filename}' for changes...`);
