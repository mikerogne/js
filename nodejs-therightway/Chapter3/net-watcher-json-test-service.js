'use strict';

const net    = require('net'),
      server = net.createServer(function (c) {
          console.log('Subscriber connected');

          c.write('{"type":"changed","file":"targ');

          let timer = setTimeout(function () {
              c.write('et.txt","timestamp":1358175758495}' + "\n");
              c.end();
          });

          c.on('end', function () {
              clearTimeout(timer);
              console.log('Subscriber disconnected');
          });
      });

server.listen(5432);
