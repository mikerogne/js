var http        = require('http');
var querystring = require('querystring');
var server      = http.createServer().listen(8124);

server.on('request', function (request, response) {
    if (request.method == 'POST') {
        let body = '';

        // append data chunk to body.
        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {
            var post = querystring.parse(body);
            console.log(post);

            response.writeHead(200, { 'Content-type': 'text/plain' });
            response.end('Hello, world\n');
        });
    }
});

console.log('Server listening on port 8124');
