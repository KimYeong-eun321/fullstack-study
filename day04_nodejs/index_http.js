const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("<h1>Hello Nodejs world</h1>")
});

server.listen(3000, function() {
    console.log("nodejs 서버 실행 중");
});



// console.log("Hello world");
