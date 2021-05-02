var http = require('http');
var server = http.createServer();
var port = 3000;

function message(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello World from Node');
    res.end();
}

server.on('request', message);

server.listen(port, ()=>{
    console.log(`Application is running on http://localhost:${port}`);
})