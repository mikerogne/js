'use strict';

const fs       = require('fs'),
      net      = require('net'),
      filename = process.argv[2],
      server   = net.createServer(function (connection) {
          // Reporting
          console.log('Subscriber connected.');
          connection.write(`Now watching '${filename}' for changes...\n`);

          // Watcher setup
          let watcher = fs.watch(filename, function () {
              connection.write(`File '${filename}' changed: ${Date.now()}\n`);
          });

          // Cleanup
          connection.on('close', function () {
              console.log('Subscriber disconnected.');
              watcher.close();
          });
      });

server.listen(5432, function () {
    console.log('SERVER> Listening for subscribers...');
});
