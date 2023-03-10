const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`<h1> It is response of the requested URL.</h1>`)
        res.end();
    }

    if(req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(PORT);
console.log('Listening on port 3000')
