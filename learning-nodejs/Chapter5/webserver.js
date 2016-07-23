const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      base = '/Users/mike/www/js/learning-nodejs/Chapter5';

http.createServer(function (req, res) {
    let pathname = base + req.url;
    console.log(pathname);

    fs.stat(pathname, function (err, stats) {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write('Resource missing 404\n');
            res.end();
        } else if (stats.isFile()) {
            let mimeType = mime.lookup(pathname);

            console.log("MIME Type: " + mimeType);
            res.setHeader('Content-Type', mimeType);

            let file = fs.createReadStream(pathname);

            file.on('open', function () {
                res.statusCode = 200;
                file.pipe(res);
            });

            file.on('error', function (err) {
                res.writeHead(403);
                res.write('file missing, or permission problem');
                console.log(err);
            });
        } else {
            res.writeHead(403);
            res.write('Directory access is forbidden');
            res.end();
        }
    });
}).listen(8124);

console.log("Webserver listening on port 8124");
