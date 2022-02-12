//Primary file for the api

//Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder

const server = http.createServer(function (req, res) {


    // Get the URL and parse it
    let parsedUrl = url.parse(req.url, true)

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+/g, '');

    //Get the query string as an object
    let queryStringObject = parsedUrl.query;

    //Get the http method
    let method = req.method.toLowerCase();

    //Get the headers as an object
    let headers = req.headers

    //Get the payload
    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', function (data) {
        buffer += decoder.write(data)
    })

    req.on('end', function () {
        buffer += decoder.end();
        // Send the response

        console.log('Request received with this payload', buffer)
        res.end(method);
    })


});

server.listen(3000, function () {
    console.log('The server is listening on port 3000 now...');
})



