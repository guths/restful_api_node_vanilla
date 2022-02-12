//Primary file for the api

//Dependencies
const http = require('http');

const server = http.createServer(function (req, res) {
    res.end('Hello world !\n');
});

server.listen(3000, function () {
    console.log('The server is listening on port 3000 now...')
})



