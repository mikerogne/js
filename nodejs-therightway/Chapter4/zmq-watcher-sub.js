'use strict';

const zmq        = require('zmq'),
      subscriber = zmq.socket('sub');

subscriber.subscribe(''); // Subscribe to all messages
subscriber.on('message', function (data) {
    let message = JSON.parse(data);
    let date    = new Date(message.timestamp);

    console.log(`File '${message.file}' changed at ${date}.`)
});

subscriber.connect('tcp://localhost:5432');
